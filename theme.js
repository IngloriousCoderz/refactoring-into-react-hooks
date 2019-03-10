import { default as theme } from 'mdx-deck/themes'
// import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark'

import themes from './themes'

const tokens = window.location.search.slice(1).split('&')
const params = tokens.reduce((params, token) => {
  const [key, value] = token.split('=')
  params[key] = value
  return params
}, {})

export const name = params.theme || 'dark'
const { title, link, colors } = themes[name]

export default {
  name,

  ...theme,

  h1: title,
  h2: title,
  h3: title,

  link: link,

  colors: colors,

  // prism: {
  //   style: atomDark,
  // },

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
}
