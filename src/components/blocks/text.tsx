import React from 'react'
import components from '../dynamic'

const applyTags = (tags = [], children) => {
  let child = children

  for (const tag of tags) {
    const props: { [key: string]: any } = {}
    let tagName = tag[0]

    if (tagName === 'p') tagName = React.Fragment
    if (tagName === 'c') tagName = 'code'
    if (tagName === '_') {
      tagName = 'span'
      props.className = 'underline'
    }
    if (tagName === 'a') {
      props.href = tag[1]
    }
    if (tagName === 'e') {
      tagName = components.Equation
      props.displayMode = false
      child = tag[1]
    }

    child = React.createElement(components[tagName] || tagName, props, child)
  }

  return child
}

export const Text = ({ children }) => {
  return (
    <p className="my-2">
      {children.map(([content, tags]) =>
        tags ? applyTags(tags, content) : content
      )}
    </p>
  )
}
