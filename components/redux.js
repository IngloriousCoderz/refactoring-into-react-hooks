/* Redux */

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

class Parent extends Component {
  dispatch = action =>
    this.setState(({ count }) => ({ count: counter(count, action) }))

  decrement = () => this.dispatch({ type: 'DECREMENT' })

  setValue = value => this.dispatch({ type: 'SET_VALUE', payload: value })

  increment = () => this.dispatch({ type: 'INCREMENT' })

  handleChange = event => this.setValue(parseInt(event.target.value))

  state = {
    count: 0,
    decrement: this.decrement,
    handleChange: this.handleChange,
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
