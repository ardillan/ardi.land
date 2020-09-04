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
                    fluid(maxWidth: 600, maxHeight: 400, cropFocus: CENTER) {
                      ...GatsbyImageSharpFluid
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
