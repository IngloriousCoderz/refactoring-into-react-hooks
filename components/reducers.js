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
    decrement: ({ dispatch }) => () => dispatch({ type: 'DECREMENT' }),
    setValue: ({ dispatch }) => value =>
      dispatch({ type: 'SET_VALUE', payload: value }),
    increment: ({ dispatch }) => () => dispatch({ type: 'INCREMENT' }),
  }),
  withHandlers({
    handleChange: ({ setValue }) => event =>
      setValue(parseInt(event.target.value)),
  }),
)

const Counter = enhance(({ count, decrement, handleChange, increment }) => (
  <>
    <p>{count}</p>
    <button onClick={decrement}>-1</button>
    <input type="number" value={count} onChange={handleChange} />
    <button onClick={increment}>+1</button>
  </>
))

render(Counter)
