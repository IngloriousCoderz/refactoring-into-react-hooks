class MyComponent extends Component {
  state = { text: 'Hello world!' }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  render() {
    const { text } = this.state
    return (
      <>
        <input value={text} onChange={this.handleChange} />
        <p>{text}</p>
      </>
    )
  }
}

render(<MyComponent />)
