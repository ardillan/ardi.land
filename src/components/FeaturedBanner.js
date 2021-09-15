import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { useGetFeaturedPosts } from "../hooks/useGetFeaturedPosts"

const FeaturedBannerContainer = styled.div`
  a {
    display: grid;
    grid-template-columns: 335px 1fr;
    grid-column-gap: 65px;
    margin-top: 45px;
    margin-bottom: 45px;
    text-decoration: none;
    background: ${(props) => props.theme.colors.secondaryColorLight};
    .gatsby-image-wrapper,
    img,
    figure,
    picture {
      height: 335px;
      width: 335px;
    }

    &:hover {
      background: ${(props) => props.theme.colors.secondaryColor};
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    a {
      margin: 0 30px;
      background-size: cover;
      grid-template-columns: 1fr;
      border: 2px solid ${(props) => props.theme.colors.secondaryColor};
      padding: 0;

      .gatsby-image-wrapper,
      img,
      figure,
      picture {
        width: 100%;
        height: 200px;
      }
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
    font-size: 15px;
    font-weight: 200;
    margin-bottom: 15px;
    color: ${(props) => props.theme.colors.fonts.text}69;
  }
  h1 {
    color: ${(props) => props.theme.colors.fonts.text};
    font-size: 25px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    width: auto;
  }

  h2 {
    color: ${(props) => props.theme.colors.fonts.text};
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
   {
  }
`

const FeaturedBanner = () => {
  const featuredPost = useGetFeaturedPosts()[0]

  return (
    <FeaturedBannerContainer>
      <Link to={`${featuredPost.node.fields.slug}`}>
        <GatsbyImage
          image={
            featuredPost.node.frontmatter.featuredImage.childImageSharp
              .gatsbyImageData
          }
          layout="fixed"
          alt="Imagen destacada"
          width={200}
          height={200}
          title="Imagen destacada"
        />

        <BannerInfo>
          <small>Artículo destacado</small>
          <h1>{featuredPost.node.frontmatter.title}</h1>
          <h2>{featuredPost.node.frontmatter.description}</h2>
          <TellMeMoreButton>¡Mola! cuéntame más</TellMeMoreButton>
        </BannerInfo>
      </Link>
    </FeaturedBannerContainer>
  )
}

export default FeaturedBanner
