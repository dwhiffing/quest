import React from 'react'
import { Parallax } from 'react-scroll-parallax'

export const BackgroundImage = ({
  className = 'background-image',
  title,
  background_image,
  variant,
}) =>
  background_image ? (
    <img
      alt={title}
      className={className}
      srcSet={background_image.childImageSharp.fluid.srcSet}
      style={
        variant === 'bottom' ? { bottom: -1, top: 'auto', height: 'auto' } : {}
      }
    />
  ) : (
    false
  )

export const ParallaxBackgroundImage = ({
  className = 'background-image',
  title,
  parallax_background,
}) => {
  if (!parallax_background) {
    return false
  }

  const { image1, image2, image3, image4, height } = parallax_background

  return (
    <div style={{ minHeight: height }}>
      {image4 && image4.image && (
        <Parallax
          className={className}
          y={[image4.minY || 0, image4.maxY || 0]}
          styleInner={{ maxHeight: height }}
        >
          <img
            alt={title}
            className={className}
            srcSet={image4.image.childImageSharp.fluid.srcSet}
          />
        </Parallax>
      )}
      {image3 && image3.image && (
        <Parallax
          className={className}
          y={[image3.minY || 0, image3.maxY || 0]}
          styleInner={{ maxHeight: height }}
        >
          <img
            alt={title}
            className={className}
            srcSet={image3.image.childImageSharp.fluid.srcSet}
          />
        </Parallax>
      )}
      {image2 && image2.image && (
        <Parallax
          className={className}
          y={[image2.minY || 0, image2.maxY || 0]}
          styleInner={{ maxHeight: height }}
        >
          <img
            alt={title}
            className={className}
            srcSet={image2.image.childImageSharp.fluid.srcSet}
          />
        </Parallax>
      )}
      {image1 && image1.image && (
        <Parallax
          className={className}
          y={[image1.minY || 0, image1.maxY || 0]}
          styleInner={{ maxHeight: height }}
        >
          <img
            alt={title}
            className={className}
            srcSet={image1.image.childImageSharp.fluid.srcSet}
          />
        </Parallax>
      )}
    </div>
  )
}
