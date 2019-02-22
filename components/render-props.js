/* render props */

class Toggler extends Component {
  state = { on: this.props.defaultOn }

  toggle = () => this.setState(({ on }) => ({ on: !on }))

  render() {
    const { children } = this.props
    const { on } = this.state
    return children({ on, toggle: this.toggle })
  }
}

function Child({ on, toggle }) {
  return <button onClick={toggle}>{on ? 'Turn off' : 'Turn on'}</button>
}

function Parent() {
  return (
    <Toggler defaultOn={false}>
      {({ on, toggle }) => <Child on={on} toggle={toggle} />}
    </Toggler>
  )
}

render(Parent)
