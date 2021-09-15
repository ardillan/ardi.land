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
                subtitle
                date
                author
                type
                description
                category
                backgroundColor
                featuredImageBanner {
                  publicURL
                }
                featuredImage {
                  sourceInstanceName
                  childImageSharp {
                    gatsbyImageData(
                      height: 600
                      width: 600
                      placeholder: DOMINANT_COLOR
                      formats: [AUTO, WEBP, AVIF]
                    )
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
