import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { useGetFeaturedPosts } from "../hooks/useGetFeaturedPosts"

const FeaturedBannerContainer = styled.div`
  display: grid;
  grid-template-columns: 335px 1fr;
  grid-column-gap: 65px;
  margin-top: 45px;
  margin-bottom: 45px;
  .gatsby-image-wrapper,
  img,
  figure,
  picture {
    height: 335px;
    width: 335px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    margin: 0 30px;
    background-size: cover;
    grid-template-columns: 1fr;
    border: 2px solid black;
    padding: 0;

    .gatsby-image-wrapper,
    img,
    figure,
    picture {
      width: 100%;
      height: 200px;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    background-position: 0;
  }
`

const BannerInfo = styled.div`
  flex-direction: column;
  justify-content: center;
  display: flex;
  height: auto;
  max-width: 400px;

  small {
    color: #ea0054;
    font-family: "Inter";
    font-size: 15px;
    font-weight: 200;
    margin-bottom: 15px;
  }
  h1 {
    font-family: "Inter";
    color: ${(props) => props.theme.colors.fonts.text};
    font-size: 25px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    width: auto;
  }

  h2 {
    color: ${(props) => props.theme.colors.fonts.text};
    font-family: "Inter";
    font-size: 17px;
    font-weight: 200;
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
    width: auto;
    h1 {
      font-size: 17px;
    }
    h2 {
      font-size: 14px;
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
    text-decoration: none;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      border-radius: 50px;
      background: ${(props) => props.theme.colors.fonts.anchor};
      color: white;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    a {
      padding: 0;
      font-family: Inter;
      text-transform: uppercase;
      font-size: 12px;
      color: #ea0054;
      font-weight: 600;
      background: white;
      transition: all 0.3s;
      text-decoration: none;
      border: none;
    }
  }
`

const FeaturedBanner = () => {
  const featuredPost = useGetFeaturedPosts()[0]

  return (
    <FeaturedBannerContainer>
      <Img
        fluid={
          featuredPost.node.frontmatter.featuredImage.childImageSharp.fluid
        }
        fadeIn={true}
        alt="Imagen destacada"
        title="Imagen destacada"
      />

      <BannerInfo>
        <small>Artículo destacado</small>
        <h1>{featuredPost.node.frontmatter.title}</h1>
        <h2>{featuredPost.node.frontmatter.description}</h2>
        <TellMeMoreButton>
          <Link to={`${featuredPost.node.fields.slug}`}>
            ¡Mola! cuéntame más
          </Link>
        </TellMeMoreButton>
      </BannerInfo>
    </FeaturedBannerContainer>
  )
}

export default FeaturedBanner
