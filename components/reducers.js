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

const enhance = compose(
  withReducer('count', 'dispatch', counter, 0),
  withHandlers({
    increment: ({ dispatch }) => () => dispatch({ type: 'INCREMENT' }),
    decrement: ({ dispatch }) => () => dispatch({ type: 'DECREMENT' }),
    setValue: ({ dispatch }) => value =>
      dispatch({ type: 'SET_VALUE', payload: value }),
  }),
  withHandlers({
    handleChange: ({ setValue }) => event =>
      setValue(parseInt(event.target.value)),
  }),
)

const Counter = enhance(({ count, increment, decrement, handleChange }) => (
  <>
    <h1>{count}</h1>
    <div>
      <button onClick={decrement}>-1</button>
      <input type="number" value={count} onChange={handleChange} />
      <button onClick={increment}>+1</button>
    </div>
  </>
))

render(Counter)
