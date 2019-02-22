/* useContext */

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
  const theme = useContext(ThemeContext)
  const title = useContext(TitleContext)
  return <h1 style={{ background: theme }}>{title}</h1>
}

render(Parent)
