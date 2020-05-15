import React from 'react'

const Feature = ({ block }) => (
  <section className="bg-dark-blue">
    <div
      className={`flex justify-between mx-auto py-40 max-w-4xl ${
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
      <div className="flex flex-col flex-1 text-white justify-center">
        <h1>{block.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: block.content }} />
      </div>
    </div>
  </section>
)

export default Feature
