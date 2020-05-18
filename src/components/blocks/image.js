import React from 'react'

const Image = ({ block }) => (
  <section className="background-image-container">
    <img
      alt={block.title}
      className={`background-image bg-${block.background || 'transparent'}`}
      style={{ height: 'auto', position: 'relative', zIndex: 20 }}
      srcSet={block.image.childImageSharp.fluid.srcSet}
    />
  </section>
)

export default Image