import { useStaticQuery, graphql } from "gatsby"

export const getGenericFeaturedImage = () => {
  const image = useStaticQuery(
    graphql`
      {
        file(name: { eq: "genericFeaturedImage" }) {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return image.file
}
