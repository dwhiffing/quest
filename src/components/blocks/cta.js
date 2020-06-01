import React from 'react'
import { TextSection } from '../TextSection'
import { BackgroundImage, ParallaxBackgroundImage } from '../BackgroundImage'

// TODO: needs to be able to disable option image below heading and below button

const CTA = ({ block }) => (
  <section
    className={`background-image-container bg-${block.background}`}
    style={{
      overflow: 'hidden',
      zIndex: block.zIndex || 1,
      paddingTop: block.paddingTop || 0,
      paddingBottom: block.paddingBottom || 0,
    }}
  >
    <div
      className="container mx-auto flex justify-center items-center"
      style={{
        height: block.height || '50vh',
        maxHeight: 2000,
      }}
    >
      <div
        className={`relative z-10 py-20 px-2 max-w-xl mx-auto text-center text-${block.textColor ||
          'white'}`}
        data-sal="slide-up"
        data-sal-duration="800"
        data-sal-delay="200"
        style={{
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

    <ParallaxBackgroundImage
      className="background-image background-image-contain"
      {...block}
    />
    <BackgroundImage {...block} />
  </section>
)

export default CTA
