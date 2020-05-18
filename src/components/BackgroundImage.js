import React from 'react'

export const BackgroundImage = ({ title, background_image, variant }) =>
  background_image ? (
    <img
      alt={title}
      className="background-image"
      srcSet={background_image.childImageSharp.fluid.srcSet}
      style={
        variant === 'bottom'
          ? {
              bottom: -1,
              top: 'auto',
              height: 'auto',
            }
          : {}
      }
    />
  ) : (
    false
  )
