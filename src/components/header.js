import React from 'react'
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import logo from '../images/logo.png'
import headerImage from '../images/header.png'

const Header = ({ siteTitle = '', siteLogo = {} }) => {
  return (
    <header className="absolute min-w-full z-10">
      <section>
        <nav
          role="navigation"
          aria-label="main navigation"
          className="min-w-full flex items-center justify-between px-4 py-4"
        >
          <div className="flex-1 flex">
            <Link to="/">
              <img alt={siteTitle} src={logo} width={195} />
            </Link>
            <img
              alt={siteTitle}
              src={headerImage}
              width={250}
              className="relative"
              style={{ bottom: -5, left: -20 }}
            />
          </div>
          <div className="flex flex-1 justify-end">
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
