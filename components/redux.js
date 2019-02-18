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

const CounterContext = createContext()

function Child() {
  const { count, decrement, handleChange, increment } = useContext(
    CounterContext,
  )
  return (
    <>
      <p>{count}</p>
      <button onClick={decrement}>-1</button>
      <input type="number" value={count} onChange={handleChange} />
      <button onClick={increment}>+1</button>
    </>
  )
}

class Parent extends Component {
  decrement = () =>
    this.setState(({ count }) => ({
      count: counter(count, { type: 'DECREMENT' }),
    }))

  setValue = value =>
    this.setState(({ count }) => ({
      count: counter(count, {
        type: 'SET_VALUE',
        payload: value,
      }),
    }))

  increment = () =>
    this.setState(({ count }) => ({
      count: counter(count, { type: 'INCREMENT' }),
    }))

  state = {
    count: 0,
    decrement: this.decrement,
    handleChange: event => this.setValue(parseInt(event.target.value)),
    increment: this.increment,
  }

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        <Child />
      </CounterContext.Provider>
    )
  }
}

render(Parent)
