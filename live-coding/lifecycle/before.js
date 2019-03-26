class MyComponent extends Component {
  state = { play: false, count: 0 }

  toggle = () => this.setState(({ play }) => ({ play: !play }))
  tick = () => this.setState(({ count }) => ({ count: count + 1 }))
  start = () => (this.interval = setInterval(this.tick, 1000))
  stop = () => clearInterval(this.interval)

  componentDidMount() {
    const { play } = this.state
    if (play) {
      this.start()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { play } = this.state
    if (play !== prevState.play) {
      if (play) {
        this.start()
      } else {
        this.stop()
      }
    }
  }

  componentWillUnmount() {
    this.stop()
  }

  render() {
    const { count, play } = this.state
    return (
      <>
        <h1>{count}</h1>
        <button onClick={this.toggle}>{play ? 'Pause' : 'Play'}</button>
      </>
    )
  }
}

render(MyComponent)
