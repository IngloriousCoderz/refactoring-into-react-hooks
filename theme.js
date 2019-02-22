import { default as theme } from 'mdx-deck/themes'
import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark'

export default {
  ...theme,

  link: {
    color: '#429aef',
    textDecoration: 'none',
  },

  colors: {
    ...theme.colors,
    text: '#bbb',
    background: '#212831',
    heading: '#98c379',
    pre: '#98c379',
  },

  // prism: {
  //   style: atomDark,
  // },

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
}
