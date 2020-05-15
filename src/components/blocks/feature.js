import React from 'react'

const Feature = ({ block }) => (
  <section>
    <div>
      <div>
        <div>
          <div>
            {block.image && (
              <img
                alt={block.title}
                srcset={block.image.childImageSharp.fluid.srcSet}
              />
            )}
          </div>
          <div>
            <div>
              <h1>{block.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: block.content }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Feature
