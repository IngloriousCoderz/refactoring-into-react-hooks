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
          {title => <p style={{ background: theme }}>{title}</p>}
        </TitleContext.Consumer>
      )}
    </ThemeContext.Consumer>
  )
}

render(Parent)
