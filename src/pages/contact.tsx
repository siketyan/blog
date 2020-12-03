import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/siketyan_dev',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/siketyan',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:root@siketyan.dev',
  },
]

export default () => (
  <>
    <Header titlePre="Contact" />
    <div className={sharedStyles.layout}>
      <div className={contactStyles.avatar}>
        <img src="https://github.com/siketyan.png" alt="avatar" height={60} />
      </div>

      <h1 style={{ marginTop: 0 }}>Naoki Ikeguchi</h1>

      <div className={contactStyles.name}>
        <p>
          Web Backend Engineer @{' '}
          <ExtLink href="https://quartetcom.co.jp/">
            Quartet Communications Co., Ltd.
          </ExtLink>
        </p>
      </div>

      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
