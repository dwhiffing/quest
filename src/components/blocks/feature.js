import React from 'react'

const Feature = ({ block }) => (
  <section
    className={`${
      block.background_image ? 'background-image-container' : ''
    } bg-${block.background || 'dark-blue'}`}
  >
    <div
      className="container flex mx-auto relative py-10 z-10"
      style={{ minHeight: block.height || '100vh' }}
    >
      <div
        className={`flex flex-1 justify-between flex-col ${
          block.orientation === 'reverse'
            ? 'md:flex-row-reverse'
            : 'md:flex-row'
        }`}
      >
        <div className="flex flex-1 justify-center items-center my-8">
          {block.image && (
            <img
              className="small-image-mobile"
              alt={block.title}
              srcSet={block.image.childImageSharp.fluid.srcSet}
              style={{ width: block.imageWidth }}
            />
          )}
        </div>
        <div
          className={`flex flex-col flex-1 text-white justify-center items-center`}
        >
          <div
            className={`flex flex-col flex-1 text-white justify-center text-center md:text-left items-center md:items-start text-${block.textColor ||
              'white'}`}
            style={{
              maxWidth: 400,
              position: block.top ? 'absolute' : 'static',
              top: block.top,
            }}
          >
            <h1 className="mb-6">{block.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: block.content }} />
            {block.button && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={block.button.url}
                className={`button inline-flex mt-6 bg-${block.textColor ||
                  'white'} text-${block.background || 'dark-blue'}`}
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

export default Feature
