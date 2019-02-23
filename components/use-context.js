const UserContext = createContext()
const ThemeContext = createContext()

function Parent() {
  return (
    <UserContext.Provider value="Antony">
      <ThemeContext.Provider value={{ color: '#e06c75' }}>
        <Child />
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}

function Child() {
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)
  return <h1 style={theme}>Hello {user}!</h1>
}

render(Parent)
