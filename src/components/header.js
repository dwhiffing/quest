import React, { useState } from 'react'
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'

const Header = ({ siteTitle = '' }) => {
  const [state, setState] = useState({ navbarOpen: false })

  return (
    <header>
      <section>
        <nav role="navigation" aria-label="main navigation">
          <div>
            <Link to="/">{siteTitle}</Link>

            <span
              onClick={() => setState({ navbarOpen: !state.navbarOpen })}
              role="button"
              className={state.navbarOpen ? 'is-active' : ''}
              aria-label="menu"
              aria-expanded="false"
              data-target="mainMenu"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </span>
          </div>
          <div id="mainMenu" className={state.navbarOpen ? 'is-active' : ''}>
            <div>
              <StaticQuery
                query={navbarQuery}
                render={data =>
                  data.allMainMenuJson.edges.map(edge => {
                    return edge.node.type === 'internal' ? (
                      <Link key={edge.node.id} to={edge.node.url}>
                        {edge.node.title}
                      </Link>
                    ) : (
                      <a
                        key={edge.node.id}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={edge.node.url}
                      >
                        {edge.node.title}
                      </a>
                    )
                  })
                }
              />
            </div>
          </div>
        </nav>
      </section>
    </header>
  )
}

export default Header

const navbarQuery = graphql`
  {
    allMainMenuJson {
      edges {
        node {
          id
          type
          url
          title
        }
      }
    }
  }
`
