function MyComponent() {
  const [count, setCount] = useState(0)
  const [play, setPlay] = useState(false)
  const toggle = () => setPlay(play => !play)

  useEffect(() => {
    let interval = null

    const start = () =>
      (interval = setInterval(() => setCount(count => count + 1), 1000))
    const stop = () => clearInterval(interval)

    if (play) {
      start()
    } else {
      stop()
    }

    return () => stop()
  }, [play])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={toggle}>{play ? 'Pause' : 'Play'}</button>
    </>
  )
}

render(MyComponent)
