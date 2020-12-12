import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import favicon from "../images/general/favicon.png"
import metaImage from "../images/general/meta-image-default.png"

const SEO = (data) => {
  const { postDescription, title } = data

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
      render={(queryData) => {
        return (
          <Helmet
            title={title}
            meta={[
              {
                name: "description",
                content: postDescription
                  ? postDescription
                  : queryData.site.siteMetadata.description,
              },
            ]}
          >
            <link rel="shortcut icon" type="image/png" href={favicon} />
            <link
              rel="alternate"
              type="application/rss+xml"
              title="Listado de entradas del blog de Ardillán"
              href="/rss.xml"
            />
            <meta
              property="og:image"
              content={`https://www.ardillan.com${metaImage}`}
            />
            <meta
              property="twitter:image"
              content={`https://www.ardillan.com${metaImage}`}
            />
          </Helmet>
        )
      }}
    />
  )
}

SEO.propTypes = {
  data: PropTypes.object,
}

export default SEO
