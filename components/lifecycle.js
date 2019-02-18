class MyComponent extends Component {
  state = { count: 0, play: false }

  start = () =>
    (this.interval = setInterval(
      () => this.setState(({ count }) => ({ count: count + 1 })),
      1000,
    ))

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
    const { count } = this.state
    return (
      <>
        <p>{count}</p>
        <button onClick={this.toggle}>Play/Pause</button>
      </>
    )
  }
}

render(MyComponent)
