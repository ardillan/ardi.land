import { useStaticQuery, graphql } from "gatsby"

export const useGetAllBestiaryPosts = () => {
  const bestiaryPosts = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "/posts/" }
            frontmatter: {
              showInPostsList: { nin: false }
              category: { in: "Bestiario" }
            }
          }
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
                    fixed(width: 150, height: 150, cropFocus: CENTER) {
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
  return bestiaryPosts.allMarkdownRemark.edges
}
