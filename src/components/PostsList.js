import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import { useGetAllPosts } from "../hooks/useGetAllPosts"
import { useGetGenericFeaturedImage } from "../hooks/useGetGenericFeaturedImage"

import { formatDate } from "../utils/helpers"

import guybrush from "../images/general/guybrush.gif"

const SearchContainer = styled.div`
  input {
    background: #f5f5f5;
    border-radius: 5px;
    border: none;
    font-size: 18px;
    font-weight: 200;
    min-height: 40px;
    min-width: 400px;
    padding-left: 20px;

    &::placeholder {
      color: #b8b8b8;
    }

    &::focus,
    &::active,
    &::focus-visible {
      box-shadow: 0px;
      border: none;
      outline: 4px dashed darkorange;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    align-items: center;
    display: flex;
    justify-content: center;
    input {
      min-width: initial;
      width: 100%;
    }
  }
`

const EmptyState = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: grey;

  img {
    width: 150px;
    margin-top: 40px;
  }
  p {
    padding: 0;
    margin: 0;
  }
`

const PostsListContainer = styled.ul`
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 50px;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    grid-gap: 30px;
    li {
      border-bottom: 1px solid #f3f3f3;
    }
  }
`

const Post = styled.li`
  a {
    color: inherit;
    text-decoration: none;
  }
`

const Content = styled.div`
  h2 {
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 0;
  }

  time {
    font-size: 15px;
    opacity: 0.8;
    padding: 20px 0;
    display: block;
  }

  p {
    font-size: 18px;
  }
  @media screen and (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    time {
      padding: 5px 0;
    }
  }
`

const PostsList = (props) => {
  const allPosts = useGetAllPosts()
  const genericImage = useGetGenericFeaturedImage().childImageSharp.fluid
  let posts = useRef(allPosts)

  const categories = []

  // Create categories pages
  posts.current.map(({ node }) => {
    return node.frontmatter.category.map((cat) =>
      categories.includes(cat) ? "" : categories.push(cat)
    )
  })

  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const results = posts.current.filter((post) =>
      post.node.frontmatter.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm])

  return (
    <>
      <SearchContainer>
        <input
          type="text"
          placeholder="Buscar entrada..."
          value={searchTerm}
          onChange={handleChange}
        />
      </SearchContainer>

      {Object.keys(searchResults).length === 0 && (
        <EmptyState>
          <img src={guybrush} alt="Guybrush bailando" />
          <p>Parece que no hay resultados</p>
          <small>Pero al menos puedes ver a Guybrush bailando</small>
        </EmptyState>
      )}

      {searchResults !== null && (
        <PostsListContainer>
          {searchResults.slice(0, props.length).map((post) => {
            let featuredImage =
              post.node.frontmatter.featuredImage !== null
                ? post.node.frontmatter.featuredImage.childImageSharp
                    .gatsbyImageData
                : genericImage
            return (
              <Post key={post.node.id}>
                <Link to={`/${post.node.fields.slug}`} key={post.node.id}>
                  <article>
                    <header>
                      <GatsbyImage
                        image={featuredImage}
                        width={200}
                        height={100}
                        alt={post.node.frontmatter.title}
                        title={post.node.frontmatter.title}
                      />
                    </header>
                    <Content>
                      <h2>{post.node.frontmatter.title}</h2>
                      <time dateTime={post.node.frontmatter.date}>
                        {formatDate(post.node.frontmatter.date)}
                      </time>
                      <p>{post.node.frontmatter.description}</p>
                    </Content>
                  </article>
                </Link>
              </Post>
            )
          })}
        </PostsListContainer>
      )}
    </>
  )
}

export default PostsList
