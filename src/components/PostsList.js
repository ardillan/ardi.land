import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { useGetFeaturedPosts } from "../hooks/useGetFeaturedPosts"
import { useGetAllPosts } from "../hooks/useGetAllPosts"
import { useGetGenericFeaturedImage } from "../hooks/useGetGenericFeaturedImage"

import { formatDate } from "../utils/helpers"

const PostsListContainer = styled.ul`
  display: grid;
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  grid-template-columns: 1fr 1fr;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    grid-template-columns: 1fr;
    width: 600px;
    margin: auto;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    grid-template-columns: 1fr;
    width: auto;
    margin: auto;
  }
`

const Post = styled.li`
  article {
    display: flex;
  }
  header {
    margin-right: 15px;
    img {
      border-radius: 50%;
    }
  }
  h2  {
    font-family: "Gluten";
    padding: 0;
    margin: 0;
    font-size: 23px;
    line-height: 22px;
  }
  p {
    font-family: "Inter";
    margin: 0;
    padding: 0;
    font-size: 14px;
  }

  &:hover {
    article {
      transition: all 0.2s;
      background: ${(props) => props.theme.colors.fonts.anchorBackground};
      padding: 20px;
      margin: -20px;
      border-radius: 10px;
    }

    h2,
    p {
      transition: all 0.2s;
      color: ${(props) => props.theme.colors.fonts.anchor};
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    display: flex;
    text-align: center;
    margin: auto;
    width: auto;
    a {
      background: none;
      article {
        flex-direction: column;
        align-items: center;
      }
    }
  }
`

const Category = styled.div`
  display: flex;
  span {
    color: ${(props) => props.theme.colors.fonts.anchor};
    font-family: "Inter";
    font-size: 14px;
    margin-right: 5px;
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    justify-content: center;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default (props) => {
  const posts = props.featured ? useGetFeaturedPosts() : useGetAllPosts()
  return (
    <PostsListContainer>
      {posts.slice(0, props.length).map((post) => {
        let featuredImage =
          post.node.frontmatter.featuredImage !== null
            ? post.node.frontmatter.featuredImage.childImageSharp.fixed
            : useGetGenericFeaturedImage().childImageSharp.fluid

        return (
          <Post key={post.node.id}>
            <Link to={`/${post.node.fields.slug}`} key={post.node.id}>
              <article>
                <header>
                  <Img
                    fixed={featuredImage}
                    fadeIn={true}
                    alt={post.node.frontmatter.title}
                    title={post.node.frontmatter.title}
                  />
                </header>
                <Content>
                  <h2>{post.node.frontmatter.title}</h2>
                  {props.showPostDate ? (
                    <p>
                      Escrito el{" "}
                      <time dateTime={post.node.frontmatter.date}>
                        {formatDate(post.node.frontmatter.date)}
                      </time>
                    </p>
                  ) : (
                    ""
                  )}
                  <Category>
                    {post.node.frontmatter.category.map((category, index) => (
                      <span key={index}>{category}</span>
                    ))}
                  </Category>
                </Content>
              </article>
            </Link>
          </Post>
        )
      })}
    </PostsListContainer>
  )
}
