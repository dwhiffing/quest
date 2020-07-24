import React from 'react'
import { BackgroundImage, ParallaxBackgroundImage } from '../BackgroundImage'
import { Button } from '../Button'
import { Body, Heading } from '../TextSection'

const Hero = ({ block }) => (
  <section
    className={`background-image-container ${
      block.variant === 'index' ? 'background-index background-bottom' : ''
    } ${block.variant === 'bottom' ? 'background-bottom' : ''} h-screen bg-${
      block.background
    }`}
    style={{ minHeight: 660 }}
  >
    <div className="container mx-auto">
      <div
        data-sal="slide-up"
        data-sal-duration="800"
        data-sal-delay="200"
        className={`relative h-screen flex flex-col justify-center z-10 text-white ${
          block.variant === 'bottom'
            ? 'text-center items-center max-w-md mx-auto md:pb-20'
            : 'text-left items-start'
        }`}
      >
        <Heading
          className="text-3xl md:text-4xl"
          style={{
            maxWidth: block.variant === 'bottom' ? 'calc(100% - 20px)' : 650,
          }}
        >
          {block.title}
        </Heading>

        <div className="my-2" />

        {block.subtitle && <Body>{block.subtitle}</Body>}

        <Button button={block.button} className="bg-pink text-white" />
      </div>
    </div>

    <ParallaxBackgroundImage {...block} />
    <BackgroundImage {...block} />
  </section>
)

export default Hero
