import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              description
              social {
                twitter
                instagram
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <footer>
            <div>
              <p>
                {" "}
                Esta web está hecha con{" "}
                <a href="http://gatsbyjs.org/">GatsbyJS</a> y algo de café desde
                la verde y gris{" "}
                <a href="https://es.wikipedia.org/wiki/Torrelavega">
                  Torrelavega
                </a>
              </p>
            </div>
            <div>
              <span>
                <a
                  href={`https://twitter.com/${
                    data.site.siteMetadata.social.twitter
                  }`}
                >
                  Twitter
                </a>
              </span>
              <span>
                <a
                  href={`https://instagram.com/${
                    data.site.siteMetadata.social.instagram
                  }`}
                >
                  Instagram
                </a>
              </span>
            </div>
          </footer>
        )
      }}
    />
  )
}
