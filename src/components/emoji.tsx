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
          lineHeight: 1,
        }}
      >
        {children}
      </div>
    </>
  )
}
