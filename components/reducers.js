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

const enhance = compose(
  withReducer('count', 'dispatch', counter, 0),
  withHandlers({
    increment: ({ dispatch }) => () => dispatch({ type: 'INCREMENT' }),
    decrement: ({ dispatch }) => () => dispatch({ type: 'DECREMENT' }),
    setCount: ({ dispatch }) => value =>
      dispatch({ type: 'SET_COUNT', payload: value }),
  }),
  withHandlers({
    handleChange: ({ setCount }) => event =>
      setCount(parseInt(event.target.value)),
  }),
)

function Counter({ count, increment, decrement, handleChange }) {
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

render(enhance(Counter))
