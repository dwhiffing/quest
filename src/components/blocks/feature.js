import React from 'react'
import { TextSection } from '../TextSection'
import { BackgroundImage, ParallaxBackgroundImage } from '../BackgroundImage'

const Feature = ({ block }) => (
  <section
    className={`${
      block.background_image ? 'background-image-container' : ''
    } bg-${block.background || 'dark-blue'}`}
  >
    <div
      className="container flex mx-auto relative py-10 z-10"
      data-sal="slide-up"
      data-sal-duration="800"
      data-sal-delay="200"
      style={{ height: block.height || '100vh', maxHeight: 1500 }}
    >
      <FeatureContent block={block} />
    </div>

    <ParallaxBackgroundImage {...block} />
    <BackgroundImage {...block} />
  </section>
)

export default Feature

export function FeatureContent({ block, imageChild, maxWidth = 400 }) {
  return (
    <div
      className={`flex flex-1 justify-between flex-col ${
        block.orientation === 'reverse' ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <div className="flex flex-1 justify-center items-center my-8">
        {imageChild
          ? imageChild
          : block.image && (
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
            maxWidth: maxWidth,
            position:
              block.top && block.top !== '0' && block.top !== '0px'
                ? 'absolute'
                : 'static',
            top: block.top,
          }}
        >
          <TextSection {...block} />
        </div>
      </div>
    </div>
  )
}
