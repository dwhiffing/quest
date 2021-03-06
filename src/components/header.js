import React from 'react'
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import logo from '../images/logo.png'
import headerImage from '../images/header.png'
import { Button } from './Button'

const Header = ({ location, siteTitle = '' }) => {
  return (
    <header className="absolute mx-auto w-full z-20" style={{ maxWidth: 1800 }}>
      <section>
        <Nav location={location} siteTitle={siteTitle} />
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

export function Nav({ location, siteTitle }) {
  return (
    <nav
      role="navigation"
      aria-label="main navigation"
      className="relative select-none bg-grey md:flex mx-auto px-0 md:px-10 py-4"
    >
      <div className="flex">
        <div className="flex-1 flex items-center mt-6">
          <div className="flex-1 flex justify-center">
              <a href="/home/"><img 
                alt={siteTitle}
                src={logo}
                style={{ minWidth: 100, maxWidth: 200 }}
              /></a>
          </div>
          <img
            alt={siteTitle}
            src={headerImage}
            className="flex-1 hidden xl:block ml-6"
            style={{ width: 220 }}
          />
        </div>
      </div>
      <NavLinks location={location} />
    </nav>
  )
}

export function NavLinks({ location }) {
  return (
    <div className="flex md:items-stretch md:flex-no-shrink md:flex-grow justify-center md:justify-end">
      <div className="mt-4 flex flex-wrap justify-center items-center">
        <StaticQuery
          query={navbarQuery}
          render={data =>
            data.allMainMenuJson.edges.map(edge => {
              const pathname = location ? location.pathname : ''
              const active =
                edge.node.url.replace(/\//g, '') === pathname.replace(/\//g, '')
              return edge.node.type === 'internal' ? (
                <Link
                  className={`nav-link mt-2 text-xs lg:text-sm mx-2 lg:mx-4${active &&
                    ' active'}`}
                  key={edge.node.id}
                  to={edge.node.url}
                >
                  {edge.node.title}
                </Link>
              ) : (
                <Button
                  key={edge.node.id}
                  button={{ text: edge.node.title, url: edge.node.url }}
                  className="bg-white text-dark-blue text-xs lg:text-sm ml-2 md:inline-flex"
                />
              )
            })
          }
        />
      </div>
    </div>
  )
}
