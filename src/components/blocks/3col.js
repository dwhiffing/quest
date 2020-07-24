import React from 'react'
import { Body, Heading } from '../TextSection'
import { Button } from '../Button'
import { ParallaxBackgroundImage } from '../BackgroundImage'

const ThreeCol = ({ block }) => (
  <section
    className={`bg-${block.background || 'dark-blue'} text-${block.textColor ||
      'white'} ${
      block.background_image ||
      (block.parallax_background &&
        block.parallax_background &&
        block.parallax_background.image1.image)
        ? 'background-image-container'
        : ''
    }`}
    style={{
      paddingBottom: +block.paddingBottom || 0,
      paddingTop: +block.paddingTop || 0,
      zIndex: +block.zIndex || 0,
    }}
  >
    <div style={{ top: block.top || 0, position: 'relative' }}>
      {block.title && (
        <Heading
          className="text-3xl md:text-4xl pt-10"
          style={{
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: block.variant === 'bottom' ? 'calc(100% - 20px)' : 650,
          }}
        >
          {block.title}
        </Heading>
      )}
      <div
        className="container justify-evenly items-center flex mx-auto py-20 relative z-10 flex-col lg:flex-row"
        style={{ height: block.height || '100vh' }}
      >
        <Column col={block.col1} />
        <Column col={block.col2} />
        <Column col={block.col3} />
      </div>
    </div>
    <ParallaxBackgroundImage
      className="background-image background-image-contain"
      {...block}
    />
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
          className="mb-4 mx-auto col-image"
        />
      )}
      <Heading className="mt-10 mb-3">{col.title}</Heading>
      <Body>{col.content}</Body>
      {col.button && (
        <Button button={col.button} className="bg-dark-blue text-white mt-6" />
      )}
    </div>
  ) : (
    false
  )
}
