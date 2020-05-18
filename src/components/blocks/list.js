import React from 'react'

const List = ({ block }) => (
  <section
    className={`bg-${block.background || 'dark-blue'} text-${block.textColor ||
      'white'}`}
  >
    <div className="text-center pt-20 max-w-md mx-auto">
      <h1 className="mb-6">{block.title}</h1>
      {block.subtitle && <p>{block.subtitle}</p>}
    </div>
    <div
      className="container flex flex-col mx-auto relative z-10 mt-20 pb-20"
      style={{ minHeight: block.height || '100vh' }}
    >
      <div className="flex flex-1 mx-4 mt-4 items-center flex-col md:flex-row">
        <div className="flex-1">
          <h1 className="mb-2">{block.col1.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: block.col1.content }} />
        </div>
        <div className="flex-1">
          {block.col1.image && (
            <img
              alt={block.col1.title}
              srcSet={block.col1.image.childImageSharp.fluid.srcSet}
              className="my-4"
            />
          )}
        </div>
      </div>

      <div className="my-8 border-b border-black border-opacity-25" />

      <div className="flex flex-1 mx-4 mt-4 items-center flex-col md:flex-row">
        <div className="flex-1">
          <h1 className="mb-2">{block.col2.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: block.col1.content }} />
        </div>
        <div className="flex-1">
          {block.col2.image && (
            <img
              alt={block.col1.title}
              srcSet={block.col1.image.childImageSharp.fluid.srcSet}
              className="my-4"
            />
          )}
        </div>
      </div>

      <div className="my-8 border-b border-black border-opacity-25" />
    </div>
  </section>
)

export default List
