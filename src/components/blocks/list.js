import React from 'react'
import { Heading, Body, TextSection } from '../TextSection'

const List = ({ block }) => (
  <section
    className={`bg-${block.background || 'dark-blue'} text-${block.textColor ||
      'white'}`}
  >
    <div className="text-center pt-20 max-w-md mx-auto">
      <TextSection {...block} />
    </div>
    <div
      className="container flex flex-col mx-auto relative z-10 mt-20 pb-20"
      style={{ height: block.height || '100vh' }}
    >
      <Item col={block.col1} />
      <Item col={block.col2} />
    </div>
  </section>
)

function Item({ col }) {
  return (
    <>
      <div className="flex flex-1 mx-4 mt-4 items-center flex-col md:flex-row">
        <div className="flex-1">
          <Heading className="mb-2">{col.title}</Heading>
          <Body>{col.content}</Body>
        </div>
        <div className="flex-1">
          {col.image && (
            <img
              alt={col.title}
              srcSet={col.image.childImageSharp.fluid.srcSet}
              className="my-4"
            />
          )}
        </div>
      </div>
      <div className="my-8 border-b border-black border-opacity-25" />
    </>
  )
}
export default List
