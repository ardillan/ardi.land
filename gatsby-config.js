module.exports = {
  siteMetadata: {
    title: `Ardillán`,
    description: `Blog personal donde se habla de tecnología, música y videojuegos`,
    social: {
      twitter: "@ardillan_",
      instagram: "@ardillan",
    },
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
