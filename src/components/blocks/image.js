import React from 'react'
import { ParallaxBackgroundImage } from '../BackgroundImage'

const Image = ({ block }) => (
  <section
    className="background-image-container"
    style={
      block.parallax_background && {
        backgroundColor: block.background,
        overflow: 'visible',
        zIndex: block.zIndex || 10,
      }
    }
  >
    {block.image && (
      <img
        alt={block.title}
        className={`background-image bg-${block.background || 'transparent'}`}
        style={{ height: 'auto', position: 'relative', zIndex: 20 }}
        srcSet={block.image.childImageSharp.fluid.srcSet}
      />
    )}
    <ParallaxBackgroundImage {...block} />
  </section>
)

export default Image
