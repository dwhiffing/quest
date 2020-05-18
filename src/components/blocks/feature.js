import React from 'react'
import { TextSection } from '../TextSection'
import { BackgroundImage } from '../BackgroundImage'

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

        <div className={`flex flex-1 justify-center items-center`}>
          <div
            className={`flex flex-col flex-1 text-white justify-center text-center items-center md:text-left md:items-start text-${block.textColor ||
              'white'}`}
            style={{
              maxWidth: 400,
              position: block.top ? 'absolute' : 'static',
              top: block.top,
            }}
          >
            <TextSection {...block} />
          </div>
        </div>
      </div>
    </div>

    <BackgroundImage {...block} />
  </section>
)

export default Feature
