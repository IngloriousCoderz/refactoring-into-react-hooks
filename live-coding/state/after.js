function MyComponent() {
  const [text, setText] = useState('Hello world!')
  const handleChange = event => setText(event.target.value)

  return (
    <>
      <h1>{text}</h1>
      <input value={text} onChange={handleChange} />
    </>
  )
}

render(MyComponent)
