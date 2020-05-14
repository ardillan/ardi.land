const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value:
        node.frontmatter.type != "page"
          ? node.frontmatter.type.concat(slug)
          : node.frontmatter.type,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/uses",
    toPath: "/como-trabajo",
    isPermanent: true,
    statusCode: 200,
  })

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
}
