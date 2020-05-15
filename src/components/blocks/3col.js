import React from 'react'

const ThreeCol = ({ block }) => (
  <section>
    <div>
      <div>
        {block.title && (
          <>
            <h2>{block.title}</h2>
            <hr />
          </>
        )}
        <div>
          <div>
            <aside>
              <h3>{block.col1.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: block.col1.content }} />
            </aside>
          </div>
          <div>
            <aside>
              <h3>{block.col2.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: block.col2.content }} />
            </aside>
          </div>
          <div>
            <aside>
              <h3>{block.col3.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: block.col3.content }} />
            </aside>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ThreeCol
