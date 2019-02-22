/* useCallback */

function useToggle(defaultOn) {
  const [on, setOn] = useState(defaultOn)
  const toggle = useCallback(() => setOn(!on), [on])
  return { on, toggle }
}

function Child() {
  const { on, toggle } = useToggle(false)
  return <button onClick={toggle}>{on ? 'Turn off' : 'Turn on'}</button>
}

function Parent() {
  return <Child />
}

render(Parent)
