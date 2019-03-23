const enhance = compose(
  withState('text', 'setText', 'Hello world!'),
  withHandlers({
    onChange: ({ setText }) => event => setText(event.target.value),
  }),
  pure,
)

function MyComponent({ text, onChange }) {
  return (
    <>
      <h1>{text}</h1>
      <input value={text} onChange={onChange} />
    </>
  )
}

render(enhance(MyComponent))
