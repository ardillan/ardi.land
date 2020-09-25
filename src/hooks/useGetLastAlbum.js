import { useStaticQuery, graphql } from "gatsby"

export const useGetLastAlbum = () => {
  const album = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "/posts/" }
            frontmatter: { showInListening: { in: true } }
          }
          sort: { fields: frontmatter___date, order: DESC }
          limit: 1
        ) {
          totalCount
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                album
                band
                date
                type
                description
                genres
                featuredImage {
                  sourceInstanceName
                  childImageSharp {
                    fluid(maxWidth: 600, maxHeight: 600) {
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
  return album.allMarkdownRemark.edges[0].node
}
