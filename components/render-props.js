function Parent() {
  return (
    <Toggler
      defaultOn={false}
      render={({ on, toggle }) => <Child on={on} toggle={toggle} />}
    />
  )
}

function Child({ on, toggle }) {
  return <button onClick={toggle}>{on ? 'Turn off' : 'Turn on'}</button>
}

class Toggler extends Component {
  state = { on: this.props.defaultOn }

  toggle = () => this.setState(({ on }) => ({ on: !on }))

  render() {
    const { render } = this.props
    const { on } = this.state
    return render({ on, toggle: this.toggle })
  }
}

render(Parent)
