import React from 'react'

const CTA = ({ block }) => (
  <section className="container mx-auto">
    <div className="my-20 text-white max-w-md mx-auto text-center">
      <h1 className="mb-6">{block.title}</h1>
      {block.subtitle && <p>{block.subtitle}</p>}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={block.button.url}
        className="button mt-10 bg-white text-black"
      >
        {block.button.text}
      </a>
    </div>
  </section>
)

export default CTA
