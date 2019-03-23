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
  return (
    <UserContext.Consumer>
      {user => (
        <ThemeContext.Consumer>
          {theme => <h1 style={theme}>Hello {user}!</h1>}
        </ThemeContext.Consumer>
      )}
    </UserContext.Consumer>
  )
}

render(Parent)
