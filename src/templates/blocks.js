import React from 'react'
import Helmet from 'react-helmet'
// eslint-disable-next-line
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

// import blocks
import ThreeCol from '../components/blocks/3col'
import Feature from '../components/blocks/feature'
import CTA from '../components/blocks/cta'
import Hero from '../components/blocks/hero'
import Image from '../components/blocks/image'

class BlocksTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttribute={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        {post.frontmatter.blocks.map((block, index) => {
          switch (block.component) {
            case '3col':
              return <ThreeCol key={`block${index}`} block={block} />
            case 'feature':
              return <Feature key={`block${index}`} block={block} />
            case 'cta':
              return <CTA key={`block${index}`} block={block} />
            case 'hero':
              return <Hero key={`block${index}`} block={block} />
            case 'image':
              return <Image key={`block${index}`} block={block} />
            default:
              return ''
          }
        })}
      </Layout>
    )
  }
}

export default BlocksTemplate

export const pageQuery = graphql`
  query BlockPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        blocks {
          component
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                srcSet
              }
            }
          }
          background_image {
            childImageSharp {
              fluid(maxWidth: 1200) {
                srcSet
              }
            }
          }
          title
          subtitle
          content
          height
          variant
          textColor
          orientation
          background
          button {
            url
            text
          }
          col1 {
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  srcSet
                }
              }
            }
            title
            content
          }
          col2 {
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  srcSet
                }
              }
            }
            title
            content
          }
          col3 {
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  srcSet
                }
              }
            }
            title
            content
          }
        }
      }
    }
  }
`
