import { useStaticQuery, graphql } from "gatsby"

export const useGetLastVideogame = () => {
  const videogame = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "/posts/" }
            frontmatter: { showInPlaying: { eq: true } }
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
                title
                platform
                date
                type
                genres
                description
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
  return videogame.allMarkdownRemark.edges[0].node
}
