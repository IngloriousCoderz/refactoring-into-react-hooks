import React from 'react'
import { LiveCode } from 'mdx-deck-live-code'
import { transform } from '@babel/standalone'
import theme from '../theme'

import '../assets/styles/prism-onedark.css'
import '../assets/styles/style.css'

const memo = Component =>
  class extends React.PureComponent {
    render() {
      return <Component {...this.props} />
    }
  }

function MyLiveCode({ title, size = 'fullscreen', code }) {
  return (
    <LiveCode
      title={title}
      size={size}
      code={code}
      previewProps={{ className: theme.name }}
      providerProps={{
        noInline: true,
        mountStylesheet: false,
        scope: {
          ...require('react'),
          ...require('recompose'),
          memo,
        },
        transformCode: input => {
          try {
            return transform(input, {
              presets: ['es2017', 'react'],
              plugins: ['proposal-class-properties'],
            }).code
          } catch (error) {
            console.error(error)
            return input
          }
        },
      }}
    />
  )
}

export default MyLiveCode
