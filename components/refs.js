class MyComponent extends Component {
  myRef = React.createRef()

  handleClick = () => this.myRef.current.focus()

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Focus!</button>
        <input defaultValue="Hello world!" ref={this.myRef} />
      </>
    )
  }
}

render(MyComponent)
