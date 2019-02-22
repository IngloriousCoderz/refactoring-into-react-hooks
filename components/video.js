import React from 'react'

function Video({ poster, src }) {
  return (
    <video
      controls={true}
      poster={poster}
      src={src}
      type="video/mp4"
      style={{
        width: '50vw',
        height: '66vh',
      }}
    />
  )
}

export default Video
