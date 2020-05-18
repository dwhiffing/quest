import React from 'react'
import { BackgroundImage } from '../BackgroundImage'
import { Heading, Body } from '../TextSection'

const Profiles = ({ block }) => (
  <section
    className={`background-image-container bg-${block.background ||
      'dark-blue'} text-${block.textColor || 'white'}`}
  >
    <div
      className="container flex flex-col mx-auto relative z-10 mt-20 pb-20"
      style={{ minHeight: block.height || '100vh' }}
    >
      <div className="flex flex-1 mx-4 mt-4 items-center flex-col md:flex-row">
        <Heading className="mb-2">{block.col1.title}</Heading>
        <Body>{block.col1.content}</Body>
        {block.col1.image && (
          <img
            alt={block.col1.title}
            srcSet={block.col1.image.childImageSharp.fluid.srcSet}
            className="my-4"
            width={100}
          />
        )}
      </div>
    </div>

    <BackgroundImage {...block} />
  </section>
)

export default Profiles
