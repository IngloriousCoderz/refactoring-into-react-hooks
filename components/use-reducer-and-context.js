/* useReducer + useContext */

function counter(state = 0, action) {
  const { type, payload } = action
  switch (type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'SET_VALUE':
      return payload
    default:
      return state
  }
}

function useCounter() {
  const [count, dispatch] = useReducer(counter, 0)

  function decrement(step) {
    dispatch({ type: 'DECREMENT', payload: step })
  }

  function setValue(value) {
    dispatch({ type: 'SET_VALUE', payload: value })
  }

  function increment(step) {
    dispatch({ type: 'INCREMENT', payload: step })
  }

  function handleChange(event) {
    setValue(parseInt(event.target.value))
  }

  return { count, decrement, handleChange, increment }
}

const CounterContext = createContext()

function Parent() {
  const counter = useCounter()

  return (
    <CounterContext.Provider value={counter}>
      <Child />
    </CounterContext.Provider>
  )
}

function Child() {
  const { count, decrement, handleChange, increment } = useContext(
    CounterContext,
  )
  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={decrement}>-1</button>
        <input type="number" value={count} onChange={handleChange} />
        <button onClick={increment}>+1</button>
      </div>
    </>
  )
}

render(Parent)
