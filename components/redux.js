const CounterContext = createContext()

class Parent extends Component {
  dispatch = action =>
    this.setState(({ count }) => ({ count: counter(count, action) }))

  increment = () => this.dispatch({ type: 'INCREMENT' })
  decrement = () => this.dispatch({ type: 'DECREMENT' })
  setCount = value => this.dispatch({ type: 'SET_COUNT', payload: value })

  handleChange = event => this.setCount(parseInt(event.target.value))

  state = {
    count: 0,
    increment: this.increment,
    decrement: this.decrement,
    handleChange: this.handleChange,
  }

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        <Child />
      </CounterContext.Provider>
    )
  }
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
