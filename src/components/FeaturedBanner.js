import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useGetFeaturedPosts } from "../hooks/useGetFeaturedPosts"

import { formatDate } from "../utils/helpers"

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
    background-position: 200px;
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
    border-bottom: 2px dashed #ffde32;
    border-top: 2px dashed #ffde32;
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
`

const Meta = styled.div`
  background: ${(props) => props.theme.colors.background.meta};
  color: ${(props) => props.theme.colors.fonts.text};
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  padding: 10px;
  width: max-content;
  margin-top: 15px;
  a {
    color: ${(props) => props.theme.colors.fonts.anchor};
    text-decoration: none;
  }
`

const FeaturedBanner = () => {
  const featuredPost = useGetFeaturedPosts()[0]
  const bannerBackgroundImage =
    featuredPost.node.frontmatter.featuredImageBanner.publicURL
  const bannerBackgroundColor = featuredPost.node.frontmatter.backgroundColor
  return (
    <FeaturedBannerContainer
      image={bannerBackgroundImage}
      backgroundColor={bannerBackgroundColor}
    >
      <BannerInfo>
        <h1>{featuredPost.node.frontmatter.title}</h1>
        <h2>{featuredPost.node.frontmatter.subtitle}</h2>
        <Meta>
          {" "}
          <time>
            Escrito el {formatDate(featuredPost.node.frontmatter.date)}{" "}
          </time>{" "}
          en{" "}
          {featuredPost.node.frontmatter.category.map((cat) => (
            <Link to={`/categoria/${cat}`} key={cat}>
              {cat}
            </Link>
          ))}
        </Meta>
      </BannerInfo>
    </FeaturedBannerContainer>
  )
}

export default FeaturedBanner
