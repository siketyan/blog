export default props => (
  <a
    className="text-blue-500 hover:text-blue-600"
    rel="noopener"
    target={props.target || '_blank'}
    {...props}
  />
)
