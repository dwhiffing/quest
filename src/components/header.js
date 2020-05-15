import React from 'react'
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'

const Header = ({ siteTitle = '', siteLogo = {} }) => {
  return (
    <header className="absolute min-w-full">
      <section>
        <nav
          role="navigation"
          aria-label="main navigation"
          className="min-w-full flex items-stretch justify-between"
        >
          <div>
            <Link to="/">
              <img alt={siteTitle} srcset={siteLogo.srcSet} />
            </Link>
          </div>
          <div id="mainMenu">
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
