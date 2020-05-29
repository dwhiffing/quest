import React from 'react'
import { Heading, Body } from '../TextSection'

const Contact = ({ block }) => (
  <section className={`background-image-container bg-${block.background}`}>
    <div className="container mx-auto pt-10 mt-20">
      <div
        className={`relative z-10 py-20 text-${block.textColor || 'white'}`}
        style={{
          position:
            block.top && block.top !== '0' && block.top !== '0px'
              ? 'absolute'
              : 'static',
          top: block.top,
        }}
      >
        <Heading className="mb-6">{block.title}</Heading>
        <Body>{block.content}</Body>
        <Heading className="mt-20" style={{ fontSize: 24 }}>
          Security
        </Heading>
        <Body>{block.security}</Body>
        <Heading className="mt-20" style={{ fontSize: 24 }}>
          Cookies
        </Heading>
        <Body>{block.cookies}</Body>
      </div>
    </div>
  </section>
)

export default Contact
