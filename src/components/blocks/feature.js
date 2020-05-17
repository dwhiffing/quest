import React from 'react'

const Feature = ({ block }) => (
  <section
    className={`background-image-container bg-${block.background ||
      'dark-blue'}`}
  >
    <div
      className="container flex mx-auto py-40 relative z-10"
      style={{ minHeight: block.height || 500 }}
    >
      <div
        className={`flex flex-1 justify-between ${
          block.orientation === 'reverse' ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        <div className="flex flex-1 justify-center items-center">
          {block.image && (
            <img
              alt={block.title}
              srcset={block.image.childImageSharp.fluid.srcSet}
              width={300}
            />
          )}
        </div>
        <div
          className={`flex flex-col flex-1 text-white justify-center ${
            block.orientation === 'reverse' ? 'items-end' : 'items-start'
          }`}
        >
          <div
            className="flex flex-col flex-1 text-white justify-center items-start"
            style={{ maxWidth: 400 }}
          >
            <h1>{block.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: block.content }} />
            {block.button && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={block.button.url}
                className="button mt-10 bg-white text-black"
              >
                {block.button.text}
              </a>
            )}
          </div>
        </div>
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

export default Feature
