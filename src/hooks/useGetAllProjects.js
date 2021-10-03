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
                      layout: CONSTRAINED
                      width: 400
                      height: 200
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
