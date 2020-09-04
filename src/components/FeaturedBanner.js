import React from "react"
import { useGetFeaturedPosts } from "../hooks/useGetFeaturedPosts"
import styled from "styled-components"
import Img from "gatsby-image"

const FeaturedBannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #fbfbfb;
  margin: 30px 0;
  padding: 15px;
  min-height: 500px;

  h1 {
    font-family: "Inter";
    font-size: 50px;
    font-weight: 800;
    margin: 0;
    padding: 0;
    width: auto;
    background: -webkit-linear-gradient(
      ${(props) => props.theme.colors.gradients.top},
      ${(props) => props.theme.colors.gradients.bottom}
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`

const FeaturedBanner = () => {
  const featuredPost = useGetFeaturedPosts()[0].node.frontmatter
  console.log(featuredPost)
  return (
    <FeaturedBannerContainer>
      <Img
        fluid={featuredPost.featuredImage.childImageSharp.fluid}
        fadeIn={true}
        alt={featuredPost.title}
        title={featuredPost.title}
      />
    </FeaturedBannerContainer>
  )
}

export default FeaturedBanner
