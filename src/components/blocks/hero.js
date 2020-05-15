import React from 'react'

const Hero = ({ block }) => (
  <section
    className="px-10 background-image-container min-h-screen"
    style={{ backgroundColor: block.background }}
  >
    {block.background_image && (
      <img
        alt={block.title}
        srcset={block.background_image.childImageSharp.fluid.srcSet}
      />
    )}
    <div className="relative min-h-screen flex items-center z-10">
      <h1>{block.title}</h1>
      {block.subtitle && <p>{block.subtitle}</p>}
    </div>
  </section>
)

export default Hero
