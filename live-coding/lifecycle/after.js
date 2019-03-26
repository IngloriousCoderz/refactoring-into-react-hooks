function MyComponent() {
  const [play, setPlay] = useState(false)
  const [count, setCount] = useState(0)
  const toggle = () => setPlay(play => !play)

  useEffect(() => {
    let interval = null

    const tick = () => setCount(count => count + 1)
    const start = () => (interval = setInterval(tick, 1000))
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
