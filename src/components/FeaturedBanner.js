import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useGetFeaturedPosts } from "../hooks/useGetFeaturedPosts"

const FeaturedBannerContainer = styled.div`
  background-position: 300px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("${(props) => props.image}");
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: row;
  margin: 30px 0;
  min-height: 400px;
  padding: 15px;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    margin: 0;
    padding: 0;
    background-size: cover;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    background-position: 0;
  }
`

const BannerInfo = styled.div`
  flex-direction: column;
  justify-content: center;
  width: 380px;
  display: flex;
  margin-left: 70px;

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

  h2 {
    border-bottom: 2px dashed ${(props) => props.theme.colors.gradients.top};
    border-top: 2px dashed ${(props) => props.theme.colors.gradients.top};
    color: ${(props) => props.theme.colors.fonts.text};
    font-family: "Gluten";
    font-size: 1.3rem;
    font-size: 1.3rem;
    margin: 0;
    padding-bottom: 10px;
    padding-top: 10px;
    width: max-content;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    margin-left: 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    display: flex;
    justify-content: flex-end;
    margin: 0;
    max-height: initial;
    padding: 0;
    padding: 20px 20px;
    width: 100%;
    h1 {
      font-size: 30px;
    }
    h2 {
      display: none;
    }
  }
`

const TellMeMoreButton = styled.div`
  margin-top: 30px;

  a {
    padding: 10px 20px;
    border-radius: 4px;
    font-family: Inter;
    text-transform: uppercase;
    font-size: 13px;
    border: 2px solid ${(props) => props.theme.colors.fonts.anchor};
    color: ${(props) => props.theme.colors.fonts.anchor};
    font-weight: 600;
    background: white;
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      border-radius: 50px;
      background: ${(props) => props.theme.colors.fonts.anchor};
      color: white;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    display: none;
  }
`

const FeaturedBanner = () => {
  const featuredPost = useGetFeaturedPosts()[0]
  const bannerBackgroundImage =
    featuredPost.node.frontmatter.featuredImageBanner.publicURL
  const bannerBackgroundColor = featuredPost.node.frontmatter.backgroundColor
  console.log(featuredPost)
  return (
    <FeaturedBannerContainer
      image={bannerBackgroundImage}
      backgroundColor={bannerBackgroundColor}
    >
      <BannerInfo>
        <h1>{featuredPost.node.frontmatter.title}</h1>
        <h2>{featuredPost.node.frontmatter.subtitle}</h2>
        <TellMeMoreButton>
          <Link to={`${featuredPost.node.fields.slug}`}>Cuéntame más</Link>
        </TellMeMoreButton>
      </BannerInfo>
    </FeaturedBannerContainer>
  )
}

export default FeaturedBanner
