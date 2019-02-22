const ThemeContext = createContext()
const TitleContext = createContext()

function Parent() {
  return (
    <ThemeContext.Provider value="grey">
      <TitleContext.Provider value="Hello world!">
        <Child />
      </TitleContext.Provider>
    </ThemeContext.Provider>
  )
}

function Child() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <TitleContext.Consumer>
          {title => <h1 style={{ background: theme }}>{title}</h1>}
        </TitleContext.Consumer>
      )}
    </ThemeContext.Consumer>
  )
}

render(Parent)
