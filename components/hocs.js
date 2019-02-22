const enhance = compose(
  withState('text', 'setText', 'Hello world!'),
  withHandlers({
    onChange: ({ setText }) => event => setText(event.target.value),
  }),
  pure,
)

const MyComponent = enhance(({ text, onChange }) => (
  <>
    <h1>{text}</h1>
    <input value={text} onChange={onChange} />
  </>
))

render(MyComponent)
