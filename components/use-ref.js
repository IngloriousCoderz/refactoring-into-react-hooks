function MyComponent() {
  const myRef = useRef()
  const handleClick = () => myRef.current.focus()
  return (
    <div className="input-group">
      <input defaultValue="Hello world!" ref={myRef} />
      <button onClick={handleClick}>Focus!</button>
    </div>
  )
}

render(MyComponent)
