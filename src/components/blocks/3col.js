import React from 'react'
import { Body, Heading } from '../TextSection'
import { Button } from '../Button'

const ThreeCol = ({ block }) => (
  <section
    className={`bg-${block.background || 'dark-blue'} text-${block.textColor ||
      'white'}`}
  >
    <div
      className="container justify-evenly flex mx-auto py-20 relative z-10 flex-col lg:flex-row items-center"
      style={{ height: block.height || '100vh' }}
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
    <div
      className="flex-1 mx-8 my-8"
      style={{
        maxWidth: 400,
        textAlign: col.button && col.button.text ? 'left' : 'center',
      }}
    >
      {col.image && (
        <img
          alt={col.title}
          srcSet={col.image.childImageSharp.fluid.srcSet}
          className="mb-4 mx-auto"
          style={{ maxWidth: 300 }}
        />
      )}
      <Heading>{col.title}</Heading>
      <Body>{col.content}</Body>
      {col.button && (
        <Button button={col.button} className="bg-dark-blue text-white mt-3" />
      )}
    </div>
  ) : (
    false
  )
}
