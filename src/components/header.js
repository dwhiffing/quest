import React from 'react'
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import logo from '../images/logo.png'
import headerImage from '../images/header.png'

const Header = ({ siteTitle = '' }) => {
  return (
    <header className="absolute min-w-full z-20">
      <section>
        <Nav siteTitle={siteTitle} />
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

export function Nav({ siteTitle }) {
  return (
    <nav
      role="navigation"
      aria-label="main navigation"
      className="container relative select-none bg-grey md:flex md:items-center mx-auto px-0 md:px-10 py-6"
    >
      <div class="flex">
        <div className="flex-1 flex items-center ">
          <div className="flex-1 flex justify-center mt-2 mb-4">
            <Link to="/">
              <img
                alt={siteTitle}
                src={logo}
                style={{ minWidth: 100, maxWidth: 200 }}
              />
            </Link>
          </div>
          <img
            alt={siteTitle}
            src={headerImage}
            className="relative flex-1 hidden lg:block ml-3 mt-3"
            style={{ width: 200 }}
          />
        </div>
      </div>
      <NavLinks />
    </nav>
  )
}

export function NavLinks() {
  return (
    <div class="flex md:items-stretch md:flex-no-shrink md:flex-grow justify-center md:justify-end">
      <div class="flex items-stretch justify-between max-w-sm md:max-w-full">
        <StaticQuery
          query={navbarQuery}
          render={data =>
            data.allMainMenuJson.edges.map(edge => {
              return edge.node.type === 'internal' ? (
                <Link
                  className="nav-link text-xs lg:text-sm mx-1 md:mx-5"
                  key={edge.node.id}
                  to={edge.node.url}
                >
                  {edge.node.title}
                </Link>
              ) : (
                <a
                  key={edge.node.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link text-xs lg:text-sm mx-1 md:mx-5"
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
  )
}
