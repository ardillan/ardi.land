import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { useGetFeaturedPosts } from "../hooks/useGetFeaturedPosts"

const FeaturedBannerContainer = styled.div`
  h2 {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #e7e7e7;
    line-height: 0.1em
    margin: 10px 0 20px;
    text-align: center;
    font-size: 21px;
    font-weight: 200;
  }

  h2 span {
    background: #fff;
    padding: 0 30px;
  }
`

const BannerInfo = styled.div`
  margin: 70px 0;
  a {
    color: inherit;
    text-align: center;
    text-decoration: none;
    h3 {
      font-size: 23px;
      font-weight: 200;
      margin: auto;
      max-width: 640px;
    }
    img {
      border-radius: ${(props) => props.theme.borderRadius};
    }
  }
`

const FeaturedBanner = () => {
  const featuredPost = useGetFeaturedPosts()[0]

  return (
    <FeaturedBannerContainer>
      <h2>
        <span>Publicación destacada</span>
      </h2>
      <BannerInfo>
        <Link to={`${featuredPost.node.fields.slug}`}>
          <GatsbyImage
            image={
              featuredPost.node.frontmatter.featuredImage.childImageSharp
                .gatsbyImageData
            }
            layout="fixed"
            alt="Imagen destacada"
            title="Imagen destacada"
          />
          <h1>{featuredPost.node.frontmatter.title}</h1>
          <h3>{featuredPost.node.frontmatter.description}</h3>
        </Link>
      </BannerInfo>
    </FeaturedBannerContainer>
  )
}

export default FeaturedBanner
