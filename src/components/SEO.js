import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import favicon from "../../content/images/general/favicon.png"

const SEO = data => {
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
      render={queryData => {
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
