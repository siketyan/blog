export const BulletedList = ({ children, nested = false }) => {
  return (
    <ul className={'list-disc list-inside ' + (nested ? 'ml-6' : 'my-2')}>
      {children}
    </ul>
  )
}

export const BulletedListItem = ({ children }) => {
  return <li className="my-1">{children}</li>
}
