import React from 'react'

const ThreeCol = ({ block }) => (
  <section
    className={`background-image-container bg-${block.background ||
      'dark-blue'} text-${block.textColor || 'white'}`}
  >
    <div
      className="container flex mx-auto py-40 relative z-10"
      style={{ minHeight: block.height || 500 }}
    >
      <div className="text-center flex-1 mx-4">
        {block.col1.image && (
          <img
            alt={block.col1.title}
            srcset={block.col1.image.childImageSharp.fluid.srcSet}
            className="mb-4"
          />
        )}
        <h1>{block.col1.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: block.col1.content }} />
      </div>
      <div className="text-center flex-1 mx-4">
        {block.col2.image && (
          <img
            alt={block.col2.title}
            srcset={block.col2.image.childImageSharp.fluid.srcSet}
            className="mb-4"
          />
        )}
        <h1>{block.col2.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: block.col2.content }} />
      </div>
      <div className="text-center flex-1 mx-4">
        {block.col3.image && (
          <img
            alt={block.col3.title}
            srcset={block.col3.image.childImageSharp.fluid.srcSet}
            className="mb-4"
          />
        )}
        <h1>{block.col3.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: block.col3.content }} />
      </div>
    </div>
  </section>
)

export default ThreeCol
