import Link from 'next/link'
import Header from '../components/header'
import { Emoji, EmojiWrapper } from '../components/emoji'

import { getBlogLink, getDateStr, postIsPublished } from '../lib/blog-helpers'
import { textBlock } from '../lib/notion/renderers'
import getNotionUsers from '../lib/notion/getNotionUsers'
import getBlogIndex from '../lib/notion/getBlogIndex'

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const authorsToGet: Set<string> = new Set()
  const posts: any[] = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)

  const { users } = await getNotionUsers([...authorsToGet])

  posts.map(post => {
    post.Authors = post.Authors.map(id => users[id].full_name)
  })

  return {
    props: {
      preview: preview || false,
      posts,
    },
    unstable_revalidate: 10,
  }
}

export default ({ posts = [], preview }) => {
  return (
    <>
      <Header />
      {preview && (
        <div className="bg-blue-100 border-blue-400 border mb-10 p-3">
          <b>Note:</b>
          {` `}Viewing in preview mode{' '}
          <Link href={`/api/clear-preview`}>
            <button className="bg-blue-500 text-blue-50 ml-3 px-2 py-1">
              Exit Preview
            </button>
          </Link>
        </div>
      )}
      <div className="text-center mb-5">
        <h1 className="text-5xl mb-2">poem.xaml</h1>
        <h2 className="text-2xl text-gray-500">しけちあのブログ</h2>
      </div>
      <div className="">
        {posts.length === 0 && <p>There are no posts yet</p>}
        {posts.map(post => {
          return (
            <div
              className="flex my-3 p-4 bg-white shadow-md rounded-lg"
              key={post.Slug}
            >
              <EmojiWrapper size={78} padding={16}>
                <Emoji>{post.emoji ?? ''}</Emoji>
              </EmojiWrapper>
              <div>
                <h3>
                  <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                    <div className="text-xl">
                      {!post.Published && <span className="mr-2">Draft:</span>}
                      <a>{post.Page}</a>
                    </div>
                  </Link>
                </h3>
                {post.Authors.length > 0 && (
                  <div className="authors">By: {post.Authors.join(' ')}</div>
                )}
                {post.Date && (
                  <div className="posted">Posted: {getDateStr(post.Date)}</div>
                )}
                <p style={{ marginTop: 0 }}>
                  {(!post.preview || post.preview.length === 0) &&
                    'No preview available'}
                  {(post.preview || []).map((block, idx) =>
                    textBlock(block, true, `${post.Slug}${idx}`)
                  )}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
