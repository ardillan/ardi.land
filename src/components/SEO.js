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
              siteUrl
              description
              keywords
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
          <Helmet title={title}>
            <meta
              name="description"
              content={
                postDescription
                  ? postDescription
                  : queryData.site.siteMetadata.description
              }
            />
            <meta
              name="keywords"
              content={queryData.site.siteMetadata.keywords.join(",")}
            />
            <meta name="title" content={queryData.site.siteMetadata.title} />
            <link rel="shortcut icon" type="image/png" href={favicon} />
            <link
              rel="alternate"
              type="application/rss+xml"
              title="Listado de entradas del blog de Ardillán"
              href="/rss.xml"
            />

            {/* {Facebook} */}
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content={queryData.site.siteMetadata.siteUrl}
            />
            <meta
              property="og:title"
              content={queryData.site.siteMetadata.title}
            />
            <meta
              property="og:description"
              content={queryData.site.siteMetadata.description}
            />
            <meta
              property="og:image"
              content={`https://www.ardillan.com${metaImage}`}
            />

            {/* {Twitter} */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta
              property="twitter:url"
              content={queryData.site.siteMetadata.siteUrl}
            />
            <meta
              property="twitter:title"
              content={queryData.site.siteMetadata.title}
            />
            <meta
              property="twitter:description"
              content={queryData.site.siteMetadata.description}
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
