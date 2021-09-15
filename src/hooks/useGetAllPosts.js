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
                    gatsbyImageData(layout: FIXED, width: 300, height: 300)
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
