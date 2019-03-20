function MyComponent() {
  const text = useText()
  return (
    <>
      <h1>{text.value}</h1>
      <input {...text} />
    </>
  )
}

function useText() {
  const [text, setText] = useState('Hello world!')
  const handleChange = event => setText(event.target.value)
  return { value: text, onChange: handleChange }
}

render(memo(MyComponent))
