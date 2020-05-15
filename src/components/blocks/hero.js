import React from 'react'

const Hero = ({ block }) => (
  <section>
    <div>
      <div>
        <h1>{block.title}</h1>
        {block.subtitle && <p>{block.subtitle}</p>}
      </div>
    </div>
  </section>
)

export default Hero
