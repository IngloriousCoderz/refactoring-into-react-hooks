class MyComponent extends Component {
  state = { count: 0, play: false }

  start = () => {
    this.interval = setInterval(
      () => this.setState(({ count }) => ({ count: count + 1 })),
      1000,
    )
  }

  stop = () => clearInterval(this.interval)

  toggle = () => this.setState(({ play }) => ({ play: !play }))

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