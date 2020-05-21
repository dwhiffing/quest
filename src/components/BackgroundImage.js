import React from 'react'
import { Parallax } from 'react-scroll-parallax'

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

export const ParallaxBackgroundImage = ({ title, parallax_background }) => {
  if (!parallax_background) {
    return false
  }

  const { image1, image2, image3, image4, height } = parallax_background

  return (
    <div style={{ minHeight: height }}>
      {image4 && (
        <Parallax
          className="background-image"
          y={[image4.minY || 0, image4.maxY || 0]}
          styleInner={{ maxHeight: height }}
        >
          <img
            alt={title}
            className="background-image"
            srcSet={image4.image.childImageSharp.fluid.srcSet}
          />
        </Parallax>
      )}
      {image3 && (
        <Parallax
          className="background-image"
          y={[image3.minY || 0, image3.maxY || 0]}
          styleInner={{ maxHeight: height }}
        >
          <img
            alt={title}
            className="background-image"
            srcSet={image3.image.childImageSharp.fluid.srcSet}
          />
        </Parallax>
      )}
      {image2 && (
        <Parallax
          className="background-image"
          y={[image2.minY || 0, image2.maxY || 0]}
          styleInner={{ maxHeight: height }}
        >
          <img
            alt={title}
            className="background-image"
            srcSet={image2.image.childImageSharp.fluid.srcSet}
          />
        </Parallax>
      )}
      <Parallax
        className="background-image"
        y={[image1.minY || 0, image1.maxY || 0]}
        styleInner={{ maxHeight: height }}
      >
        <img
          alt={title}
          className="background-image"
          srcSet={image1.image.childImageSharp.fluid.srcSet}
        />
      </Parallax>
    </div>
  )
}
