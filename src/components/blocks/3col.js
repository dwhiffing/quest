import React from 'react'

const ThreeCol = ({ block }) => (
  <section
    className={`bg-${block.background || 'dark-blue'} text-${block.textColor ||
      'white'}`}
  >
    <div
      className="container justify-evenly flex mx-auto py-20 relative z-10 flex-col lg:flex-row items-center"
      style={{ minHeight: block.height || '100vh' }}
    >
      <div className="text-center flex-1 mx-4 my-8" style={{ maxWidth: 400 }}>
        {block.col1.image && (
          <img
            alt={block.col1.title}
            srcSet={block.col1.image.childImageSharp.fluid.srcSet}
            className="mb-4 mx-auto"
            style={{ maxWidth: 350 }}
          />
        )}
        <h1>{block.col1.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: block.col1.content }} />
      </div>
      <div className="text-center flex-1 mx-4 my-8" style={{ maxWidth: 400 }}>
        {block.col2.image && (
          <img
            alt={block.col2.title}
            srcSet={block.col2.image.childImageSharp.fluid.srcSet}
            className="mb-4 mx-auto"
            style={{ maxWidth: 350 }}
          />
        )}
        <h1>{block.col2.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: block.col2.content }} />
      </div>
      {block.col3 && (
        <div className="text-center flex-1 mx-4 my-8" style={{ maxWidth: 400 }}>
          {block.col3.image && (
            <img
              alt={block.col3.title}
              srcSet={block.col3.image.childImageSharp.fluid.srcSet}
              className="mb-4 mx-auto"
              style={{ maxWidth: 350 }}
            />
          )}
          <h1>{block.col3.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: block.col3.content }} />
        </div>
      )}
    </div>
  </section>
)

export default ThreeCol
