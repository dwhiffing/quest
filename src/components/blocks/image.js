import React from 'react'

const Image = ({ block }) => (
  <section className="background-image-container">
    <img
      alt={block.title}
      className="background-image"
      style={{ height: 'auto', position: 'static' }}
      srcset={block.image.childImageSharp.fluid.srcSet}
    />
  </section>
)

export default Image
