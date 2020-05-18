import React from 'react'
import { BackgroundImage } from '../BackgroundImage'
import { Button } from '../Button'
import { Body, Heading } from '../TextSection'

const Hero = ({ block }) => (
  <section
    className={`background-image-container min-h-screen bg-${block.background}`}
  >
    <div className="container mx-auto">
      <div
        className={`relative min-h-screen flex flex-col justify-center z-10 text-white ${
          block.variant === 'bottom'
            ? 'text-center items-center max-w-md mx-auto md:pb-20'
            : 'text-left items-start'
        }`}
      >
        <Heading
          className="text-3xl md:text-5xl"
          style={{ maxWidth: block.variant === 'bottom' ? '100%' : 650 }}
        >
          {block.title}
        </Heading>

        <div className="my-2" />

        {block.subtitle && <Body>{block.subtitle}</Body>}

        <Button button={block.button} className="bg-pink text-white" />
      </div>
    </div>

    <BackgroundImage {...block} />
  </section>
)

export default Hero
