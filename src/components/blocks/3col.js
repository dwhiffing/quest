import React from 'react'
import { Body, Heading } from '../TextSection'

const ThreeCol = ({ block }) => (
  <section
    className={`bg-${block.background || 'dark-blue'} text-${block.textColor ||
      'white'}`}
  >
    <div
      className="container justify-evenly flex mx-auto py-20 relative z-10 flex-col lg:flex-row items-center"
      style={{ minHeight: block.height || '100vh' }}
    >
      <Column col={block.col1} />
      <Column col={block.col2} />
      <Column col={block.col3} />
    </div>
  </section>
)

export default ThreeCol

function Column({ col }) {
  return col && col.image ? (
    <div className="text-center flex-1 mx-4 my-8" style={{ maxWidth: 400 }}>
      {col.image && (
        <img
          alt={col.title}
          srcSet={col.image.childImageSharp.fluid.srcSet}
          className="mb-4 mx-auto"
          style={{ maxWidth: 350 }}
        />
      )}
      <Heading>{col.title}</Heading>
      <Body>{col.content}</Body>
    </div>
  ) : (
    false
  )
}
