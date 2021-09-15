import { useStaticQuery, graphql } from "gatsby"

export const useGetGenericFeaturedImage = () => {
  const image = useStaticQuery(
    graphql`
      {
        file(name: { eq: "genericFeaturedImage" }) {
          childImageSharp {
            gatsbyImageData(width: 200, height: 200)
          }
        }
      }
    `
  )
  return image.file
}
