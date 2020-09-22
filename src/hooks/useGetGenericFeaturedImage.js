import { useStaticQuery, graphql } from "gatsby"

export const useGetGenericFeaturedImage = () => {
  const image = useStaticQuery(
    graphql`
      {
        file(name: { eq: "genericFeaturedImage" }) {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return image.file
}
