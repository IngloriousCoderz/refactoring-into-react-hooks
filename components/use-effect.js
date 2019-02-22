/* useEffect */

function MyComponent() {
  const { count, toggle } = useTimer()

  return (
    <>
      <h1>{count}</h1>
      <button onClick={toggle}>Play/Pause</button>
    </>
  )
}

function useTimer() {
  const [count, setCount] = useState(0)
  const [play, setPlay] = useState(false)

  function toggle() {
    setPlay(play => !play)
  }

  useEffect(() => {
    let interval = null

    function start() {
      interval = setInterval(() => setCount(count => count + 1), 1000)
    }

    function stop() {
      clearInterval(interval)
    }

    if (play) {
      start()
    } else {
      stop()
    }

    return () => stop()
  }, [play])

  return { count, toggle }
}

render(MyComponent)
