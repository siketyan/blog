import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Blog', page: '/' },
  { label: 'Contact', page: '/contact' },
  { label: 'Source Code', link: 'https://github.com/siketyan/blog' },
]

const ogImageUrl = 'https://blog.siketyan.dev/og-image.png'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} poem.xaml</title>
        <meta name="description" content="しけちあのブログ" />
        <meta name="og:title" content="poem.xaml" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@siketyan_dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul className="flex justify-center mb-10">
        {navItems.map(({ label, page, link }) => (
          <li key={label} className="p-3">
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
