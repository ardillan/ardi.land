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
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `luetigas`,
        path: `${__dirname}/src/luetigas`,
      },
    },
  ],
}
