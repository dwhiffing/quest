import React from 'react'
import { BackgroundImage } from '../BackgroundImage'
import { Body } from '../TextSection'
import { FeatureContent } from './feature'
import { Button } from '../Button'

const Profiles = ({ block }) => (
  <section
    className={`background-image-container bg-${block.background ||
      'dark-blue'} text-${block.textColor || 'white'}`}
  >
    <div
      className="container flex flex-col mx-auto relative z-10"
      style={{ height: block.height || '100vh' }}
    >
      <div style={{ maxHeight: 640 }}>
        <FeatureContent
          maxWidth={540}
          block={block}
          imageChild={
            <div className="relative flex items-end justify-center">
              <img
                className="small-image-mobile rounded-full border-light-purple"
                alt={block.title}
                srcSet={block.image.childImageSharp.fluid.srcSet}
                style={{
                  width: block.imageWidth,
                  borderWidth: 20,
                }}
              />
              <div
                className="absolute py-6 px-8 bg-light-purple text-center rounded-xl"
                style={{ bottom: -40 }}
              >
                <Body>{block.col1.title}</Body>
                <Button
                  className="bg-dark-blue text-white mt-2"
                  button={block.button}
                />
              </div>
            </div>
          }
        />
      </div>
      <div className="flex flex-col items-center mt-10">
        <div className="flex">
          <Profile col={block.col1} />
          <Profile col={block.col2} />
          <Profile col={block.col3} />
          <Profile col={block.col4} />
        </div>

        <Button
          className="bg-blue text-white"
          style={{
            padding: '35px 100px',
            borderRadius: 60,
            marginTop: 100,
            marginBottom: 380,
          }}
          button={block.button2}
        />
      </div>
    </div>

    <BackgroundImage {...block} />
  </section>
)

export default Profiles

function Profile({ col }) {
  return (
    <div
      className="flex flex-1 mx-4 mt-4 items-center flex-col md:flex-row"
      style={{ minWidth: 300 }}
    >
      <img
        alt={col.title}
        srcSet={col.image.childImageSharp.fluid.srcSet}
        className="my-4 border-light-purple rounded-full mr-4"
        width={170}
        style={{ borderWidth: 10 }}
      />
      <div>
        <Body className="font-bold mb-1">{col.title}</Body>
        <Body>{col.content}</Body>
      </div>
    </div>
  )
}
