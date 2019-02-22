/* Reselect */

function fibonacci(num) {
  if (num === 1 || num === 2) return num
  return fibonacci(num - 1) + fibonacci(num - 2)
}

function Fibonacci() {
  const [num, setNum] = useState(1)
  const fib = useMemo(
    () => console.log('Heavy computing...') || fibonacci(num),
    [num],
  )

  return (
    <>
      <h1>{fib}</h1>
      <input
        type="number"
        value={num}
        onChange={event => setNum(parseInt(event.target.value))}
      />
    </>
  )
}

render(Fibonacci)
