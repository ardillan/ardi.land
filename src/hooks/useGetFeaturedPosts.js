import { useStaticQuery, graphql } from "gatsby"

export const useGetFeaturedPosts = () => {
  const posts = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "/posts/" }
            frontmatter: { featured: { eq: true } }
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
                type
                description
                category
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 600, maxHeight: 400, cropFocus: CENTER) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return posts.allMarkdownRemark.edges
}
