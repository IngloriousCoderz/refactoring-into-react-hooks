class MyComponent extends Component {
  state = { text: 'Hello world!' }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  render() {
    const { text } = this.state
    return (
      <>
        <h1>{text}</h1>
        <input value={text} onChange={this.handleChange} />
      </>
    )
  }
}

render(MyComponent)
