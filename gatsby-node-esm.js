const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
import { slugify } from "./src/utils/helpers"

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

  return graphql(`
    {
      blogCategories: allMarkdownRemark(
        filter: { frontmatter: { category: { nin: [null] } } }
      ) {
        edges {
          node {
            frontmatter {
              category
            }
          }
        }
      }
      blogPosts: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blog" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      projectPosts: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "proyecto" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    // Crea las páginas de los proyectos
    result.data.projectPosts.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/project-post.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })

    // Crea las páginas de las entradas del blog
    result.data.blogPosts.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })

    // Crea las páginas para las categorías del blog
    const categories = []

    result.data.blogCategories.edges.map(({ node }) => {
      node.frontmatter.category.map((cat) => {
        categories.includes(cat) ? "" : categories.push(cat)
      })
    })

    categories.map((cat) => {
      createPage({
        path: `categoria/${slugify(cat.toLowerCase())}`,
        component: path.resolve(`./src/templates/blog-category.js`),
        context: {
          category: cat,
        },
      })
    })
  })
}
