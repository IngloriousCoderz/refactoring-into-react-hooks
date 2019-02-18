import React from 'react'
import { LiveCode } from 'mdx-deck-live-code'
import { transform } from '@babel/standalone'

function MyLiveCode({ title, size = 'large', code }) {
  return (
    <LiveCode
      title={title}
      size={size}
      code={code}
      providerProps={{
        noInline: true,
        scope: { ...require('react'), ...require('recompose') },
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
