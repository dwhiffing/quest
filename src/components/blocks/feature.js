import React from 'react'
import { TextSection } from '../TextSection'
import { BackgroundImage, ParallaxBackgroundImage } from '../BackgroundImage'

const Feature = ({ block }) => (
  <section
    className={`${
      block.background_image ||
      (block.parallax_background &&
        block.parallax_background &&
        block.parallax_background.image1.image)
        ? 'background-image-container'
        : ''
    } bg-${block.background || 'dark-blue'}`}
    style={{
      paddingBottom: block.paddingBottom || 0,
      paddingTop: block.paddingTop || 0,
      zIndex: +block.zIndex || 0,
    }}
  >
    <div
      className={`container flex mx-auto relative py-10 z-10 ${block.height !==
        'auto' && 'feature-container'}`}
      data-sal="slide-up"
      data-sal-duration="800"
      data-sal-delay="200"
      style={{ height: block.height || '100vh' }}
    >
      <FeatureContent block={block} />
    </div>

    <ParallaxBackgroundImage
      className={
        block.variant === 'bottom'
          ? 'background-image background-image-contain'
          : 'background-image'
      }
      {...block}
    />
    <BackgroundImage {...block} />
  </section>
)

export default Feature

export function FeatureContent({ block, imageChild, maxWidth = '90vw' }) {
  return (
    <div
      className={`flex flex-1 justify-between flex-col ${
        block.orientation === 'reverse' ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
      style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}
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
