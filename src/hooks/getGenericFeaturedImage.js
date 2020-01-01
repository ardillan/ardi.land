import { useStaticQuery, graphql } from "gatsby"

export const getGenericFeaturedImage = () => {
  const image = useStaticQuery(
    graphql`
      {
        file(name: { eq: "genericFeaturedImage" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return image.file
}
