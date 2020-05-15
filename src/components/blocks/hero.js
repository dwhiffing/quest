import React from 'react'

const Hero = ({ block }) => (
  <section
    className="min-h-screen"
    style={{ backgroundImage: `url(${block.background})` }}
  >
    <h1>{block.title}</h1>
    {block.subtitle && <p>{block.subtitle}</p>}
  </section>
)

export default Hero
