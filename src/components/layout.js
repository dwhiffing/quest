import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import favicon from './favicon.png'
import '../css/main.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={layoutQuery}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${favicon}`,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer content={data.site.siteMetadata.footer} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const layoutQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        footer
      }
    }
  }
`
