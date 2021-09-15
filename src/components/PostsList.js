import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import { slugify } from "../utils/helpers"
import { useGetAllPosts } from "../hooks/useGetAllPosts"
import { useGetGenericFeaturedImage } from "../hooks/useGetGenericFeaturedImage"

import { formatDate } from "../utils/helpers"

const SearchContainer = styled.div``
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
const Post = styled.li``
const Categories = styled.div``
const Category = styled.div``
const Content = styled.div``

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
  const [searchResults, setSearchResults] = useState(null)

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
      <Categories>
        {categories.map((cat) => (
          <Link key={cat} to={`/categoria/${slugify(cat.toLowerCase())}`}>
            {cat}
          </Link>
        ))}
      </Categories>
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
                        fadeIn={true}
                        width={200}
                        height={100}
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
                        {post.node.frontmatter.category.map(
                          (category, index) => (
                            <span key={index}>{category}</span>
                          )
                        )}
                      </Category>
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
