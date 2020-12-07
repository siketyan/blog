import ExtLink from './ext-link'

export interface IContact {
  Comp: (props: { height: number }) => JSX.Element
  alt: string
  link: string
}

type Props = {
  contact: IContact
}

export const Contact = ({ contact }: Props) => {
  return (
    <ExtLink
      className="inline-block m-4"
      href={contact.link}
      aria-label={contact.alt}
    >
      <contact.Comp height={32} />
    </ExtLink>
  )
}
