import React, { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import favicon from './favicon.png'
import sal from 'sal.js'

import 'sal.js/dist/sal.css'
import '../css/main.css'

const Layout = ({ children }) => {
  useEffect(() => {
    sal()
  }, [])

  return (
    <StaticQuery
      query={layoutQuery}
      render={data => (
        <ParallaxProvider>
          <div className="mx-auto" style={{ maxWidth: 1600 }}>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
              link={[
                { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Header siteTitle={data.site.siteMetadata.title} />
            {children}
            <Footer content={data.site.siteMetadata.footer} />
          </div>
        </ParallaxProvider>
      )}
    />
  )
}

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
