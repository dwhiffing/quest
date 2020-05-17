import React from 'react'

const CTA = ({ block }) => (
  <section className={`background-image-container bg-${block.background}`}>
    <div className="container mx-auto">
      <div
        className={`py-20 max-w-md mx-auto text-center text-${block.textColor ||
          'white'}`}
      >
        <h1 className="mb-6">{block.title}</h1>
        {block.subtitle && <p>{block.subtitle}</p>}
        {block.button && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={block.button.url}
            className={`button mt-10 bg-${block.textColor ||
              'white'} text-${block.background || 'dark-blue'}`}
          >
            {block.button.text}
          </a>
        )}
      </div>
    </div>
  </section>
)

export default CTA
