import React from 'react'
import { TextSection } from '../TextSection'
import { BackgroundImage } from '../BackgroundImage'

const CTA = ({ block }) => (
  <section className={`background-image-container bg-${block.background}`}>
    <div
      className="container mx-auto flex justify-center items-center"
      style={{ minHeight: block.height || '50vh' }}
    >
      <div
        className={`relative z-10 py-20 max-w-xl mx-auto text-center text-${block.textColor ||
          'white'}`}
        style={{
          position: block.top ? 'absolute' : 'static',
          top: block.top,
        }}
      >
        <TextSection {...block} />
      </div>
    </div>

    <BackgroundImage {...block} />
  </section>
)

export default CTA
