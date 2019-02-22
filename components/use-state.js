/* useState */

function MyComponent() {
  const [text, setText] = useState('Hello world!')

  function handleChange(event) {
    setText(event.target.value)
  }

  return (
    <>
      <h1>{text}</h1>
      <input value={text} onChange={handleChange} />
    </>
  )
}

render(MyComponent)
