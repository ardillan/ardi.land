import { useStaticQuery, graphql } from "gatsby"

export const useGetAllPosts = () => {
  const posts = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/posts/" } }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          totalCount
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                date
                author
                featuredImage {
                  childImageSharp {
                    fixed(width: 100, height: 100, cropFocus: CENTER) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
                type
                description
                category
              }
            }
          }
        }
      }
    `
  )
  return posts.allMarkdownRemark.edges
}
