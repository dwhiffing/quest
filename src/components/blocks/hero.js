import React from 'react'

const Hero = ({ block }) => (
  <section
    className="background-image-container min-h-screen"
    style={{ backgroundColor: block.background }}
  >
    <div className="container mx-auto">
      {block.background_image && (
        <img
          alt={block.title}
          className="background-image"
          srcset={block.background_image.childImageSharp.fluid.srcSet}
        />
      )}
      <div className="relative min-h-screen flex flex-col justify-center items-start z-10">
        <h1 className="md:text-5xl" style={{ maxWidth: 650 }}>
          {block.title}
        </h1>
        <div className="my-3" />
        {block.subtitle && <p>{block.subtitle}</p>}
        {block.button && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="button bg-pink text-white"
            href={block.button.url}
          >
            {block.button.text}
          </a>
        )}
      </div>
    </div>
  </section>
)

export default Hero
