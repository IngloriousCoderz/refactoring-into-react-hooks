const enhance = compose(
  withState('text', 'setText', 'Hello world!'),
  withHandlers({
    onChange: ({ setText }) => event => setText(event.target.value),
  }),
  pure,
)

const MyComponent = enhance(({ text, onChange }) => (
  <>
    <input value={text} onChange={onChange} />
    <p>{text}</p>
  </>
))

render(MyComponent)
