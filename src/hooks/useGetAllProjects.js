import { useStaticQuery, graphql } from "gatsby"

export const useGetAllProjects = () => {
  const posts = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/projects/" } }
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
                    gatsbyImageData(
                      layout: FIXED
                      width: 300
                      height: 300
                      placeholder: TRACED_SVG
                    )
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
