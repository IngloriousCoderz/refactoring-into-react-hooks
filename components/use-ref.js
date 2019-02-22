function MyComponent() {
  const myRef = useRef()
  const handleClick = () => myRef.current.focus()
  return (
    <>
      <input defaultValue="Hello world!" ref={myRef} />
      <button onClick={handleClick}>Focus!</button>
    </>
  )
}

render(MyComponent)
