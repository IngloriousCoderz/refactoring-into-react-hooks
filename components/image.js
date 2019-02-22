import React from 'react'

function Image({ src, ...style }) {
  return (
    <div
      style={{
        width: '50vw',
        height: '75vh',
        margin: '0 auto',
        background: `url(${src})`,
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        ...style,
      }}
    />
  )
}

export default Image
