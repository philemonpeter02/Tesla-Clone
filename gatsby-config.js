module.exports = {
  siteMetadata: {
    title: `Tesla-Clone | Phil's`,
    description: `Tesla homme page clone by Phil.`,
    author: `@philemonpeter02`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tesla-Clone | Phil's`,
        short_name: `Tesla`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
     `gatsby-plugin-offline`,
  ],
}
