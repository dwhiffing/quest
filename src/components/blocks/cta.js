import React from 'react'

const CTA = ({ block }) => (
  <section>
    <div>
      <div>
        <h2>{block.title}</h2>
        {block.subtitle && <p>{block.subtitle}</p>}
        <a target="_blank" rel="noopener noreferrer" href={block.button.url}>
          {block.button.text}
        </a>
      </div>
    </div>
  </section>
)

export default CTA
