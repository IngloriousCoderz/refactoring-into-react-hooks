class MyComponent extends Component {
  myRef = React.createRef()

  handleClick = () => this.myRef.current.focus()

  render() {
    return (
      <div className="input-group">
        <input defaultValue="Hello world!" ref={this.myRef} />
        <button onClick={this.handleClick}>Focus!</button>
      </div>
    )
  }
}

render(MyComponent)
