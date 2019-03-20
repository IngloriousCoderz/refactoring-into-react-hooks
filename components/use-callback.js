function Parent() {
  const toggler = useToggler(false)
  return <Child {...toggler} />
}

function Child({ on, toggle }) {
  return <button onClick={toggle}>{on ? 'Turn off' : 'Turn on'}</button>
}

function useToggler(defaultOn) {
  const [on, setOn] = useState(defaultOn)
  const toggle = useCallback(() => setOn(!on), [on])
  return { on, toggle }
}

render(Parent)
