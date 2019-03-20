const CounterContext = createContext()

function useCounter() {
  const [count, dispatch] = useReducer(counter, 0)
  const increment = () => dispatch({ type: 'INCREMENT' })
  const decrement = () => dispatch({ type: 'DECREMENT' })
  const setCount = value => dispatch({ type: 'SET_COUNT', payload: value })
  const handleChange = event => setCount(parseInt(event.target.value))
  return { count, increment, decrement, handleChange }
}

function Parent() {
  const counter = useCounter()

  return (
    <CounterContext.Provider value={counter}>
      <Child />
    </CounterContext.Provider>
  )
}

function Child() {
  const { count, increment, decrement, handleChange } = useContext(
    CounterContext,
  )
  return (
    <>
      <h1>{count}</h1>
      <div className="input-group">
        <button onClick={decrement}>-1</button>
        <input type="number" value={count} onChange={handleChange} />
        <button onClick={increment}>+1</button>
      </div>
    </>
  )
}

render(Parent)

function counter(state = 0, action) {
  const { type, payload } = action
  switch (type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'SET_COUNT':
      return payload
    default:
      return state
  }
}
