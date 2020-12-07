import Header from '../components/header'
import ExtLink from '../components/ext-link'
import { Contact, IContact } from '../components/contact'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'

const contacts: IContact[] = [
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
    <div>
      <div className="text-center m-3">
        <img
          className="w-24 h-24 inline-block"
          src="https://github.com/siketyan.png"
          alt="avatar"
        />
      </div>

      <h1 className="text-3xl text-center mb-2">Naoki Ikeguchi</h1>

      <div className="text-center">
        <p>
          Web Backend Engineer @{' '}
          <ExtLink href="https://quartetcom.co.jp/">
            Quartet Communications Co., Ltd.
          </ExtLink>
        </p>
      </div>

      <div className="text-center">
        {contacts.map(contact => {
          return <Contact contact={contact} />
        })}
      </div>
    </div>
  </>
)
