import React from 'react'

const Hero = ({ block }) => (
  <section
    className={`background-image-container min-h-screen bg-${block.background}`}
  >
    <div className="container mx-auto">
      <div
        className={`relative min-h-screen flex flex-col justify-center z-10 text-white ${
          block.variant === 'bottom'
            ? 'text-center items-center max-w-md mx-auto md:pb-20'
            : 'text-left items-start'
        }`}
      >
        <h1
          className="text-3xl md:text-5xl"
          style={{ maxWidth: block.variant === 'bottom' ? '100%' : 650 }}
        >
          {block.title}
        </h1>
        <div className="my-2" />
        {block.subtitle && <p>{block.subtitle}</p>}
        {block.button && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="button inline-flex bg-pink"
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
        srcSet={block.background_image.childImageSharp.fluid.srcSet}
        style={
          block.variant === 'bottom'
            ? {
                bottom: -1,
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
