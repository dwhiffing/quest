const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

function isIndexPage(page) {
  return path.basename(page.node.fileAbsolutePath) === 'index.md'
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const templates = {
      single: path.resolve('./src/templates/single.js'),
      blocks: path.resolve('./src/templates/blocks.js'),
    }
    resolve(
      // query for markdown files
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  excerpt(format: PLAIN)
                  fileAbsolutePath
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    template
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // create the pages
        const pages = result.data.allMarkdownRemark.edges

        for (page of pages) {
          let pageContext = {
            slug: page.node.fields.slug,
          }

          // if it's a page index, add corresponding pages to context
          if (isIndexPage(page)) {
            const parentRelPath = path.dirname(
              path.relative(__dirname, page.node.fileAbsolutePath)
            )
            pageContext.children = pages.filter(({ node }) => {
              if (path.basename(node.fileAbsolutePath) === 'index.md') {
                return false
              }
              const childRelPath = path.relative(
                __dirname,
                node.fileAbsolutePath
              )
              return childRelPath.startsWith(parentRelPath)
            })
          }

          // determine which layout to use for page
          let templateComponent
          if (page.node.frontmatter.template) {
            templateComponent = templates[page.node.frontmatter.template]
          } else {
            templateComponent = templates.single
          }

          createPage({
            path: page.node.fields.slug,
            component: templateComponent,
            context: pageContext,
          })
        }
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
