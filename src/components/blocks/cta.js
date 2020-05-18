import React from 'react'

const CTA = ({ block }) => (
  <section className={`background-image-container bg-${block.background}`}>
    <div
      className="container mx-auto flex justify-center items-center"
      style={{ minHeight: block.height || '50vh' }}
    >
      <div
        className={`relative z-10 py-20 max-w-xl mx-auto text-center text-${block.textColor ||
          'white'}`}
        style={{
          position: block.top ? 'absolute' : 'static',
          top: block.top,
        }}
      >
        <h1 className="mb-6">{block.title}</h1>
        {block.subtitle && <p>{block.subtitle}</p>}
        {block.button && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={block.button.url}
            className={`button inline-flex mt-10 bg-${block.textColor ||
              'white'} text-${block.background || 'dark-blue'}`}
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
            : { height: 'auto' }
        }
      />
    )}
  </section>
)

export default CTA
