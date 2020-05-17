import React from 'react'

const Hero = ({ block }) => (
  <section
    className={`background-image-container min-h-screen bg-${block.background}`}
  >
    <div className="container mx-auto">
      <div
        className={`relative min-h-screen flex flex-col justify-center z-10 text-white ${
          block.variant === 'bottom'
            ? 'text-center items-center max-w-md mx-auto'
            : 'text-left items-start'
        }`}
      >
        <h1
          className="md:text-5xl"
          style={{ maxWidth: block.variant === 'bottom' ? '100%' : 650 }}
        >
          {block.title}
        </h1>
        <div className="my-3" />
        {block.subtitle && <p>{block.subtitle}</p>}
        {block.button && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="button bg-pink"
            href={block.button.url}
          >
            {block.button.text}
          </a>
        )}
      </div>
    </div>
    {block.background_image && (
      <img
        alt={block.title}
        className="background-image"
        srcset={block.background_image.childImageSharp.fluid.srcSet}
        style={
          block.variant === 'bottom'
            ? {
                bottom: 0,
                top: 'auto',
                height: 'auto',
              }
            : {}
        }
      />
    )}
  </section>
)

export default Hero
