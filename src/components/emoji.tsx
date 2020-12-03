export const Emoji = ({ children }) => {
  return (
    <>
      <span className="emoji" role="image">
        {children}
      </span>

      <style jsx>{`
        span.emoji {
          font-family: 'Apple Color Emoji', 'Segoe UI Emoji', NotoColorEmoji,
            'Noto Color Emoji', 'Segoe UI Symbol', 'Android Emoji', EmojiSymbols,
            sans-serif;
          line-height: 1em;
        }
      `}</style>
    </>
  )
}

export const EmojiWrapper = ({ children, size, padding }) => {
  return (
    <>
      <div
        style={{
          height: size,
          width: size,
          fontSize: size - padding * 2,
          padding: padding,
        }}
      >
        {children}
      </div>
    </>
  )
}
