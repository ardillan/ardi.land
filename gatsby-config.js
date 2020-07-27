module.exports = {
  siteMetadata: {
    title: `Ardillán`,
    description: `Blog personal donde se habla de tecnología, música y videojuegos`,
    siteUrl: `https://www.ardillan.com/`,
    social: {
      twitter: "@ardillan_",
      instagram: "ardillan",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              showCaptions: true,
              quality: 80,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `general`,
        path: `${__dirname}/src/images/general`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videogames`,
        path: `${__dirname}/src/content/videogames`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `music`,
        path: `${__dirname}/src/content/music`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `spaces`,
        path: `${__dirname}/src/pages/espacios`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
