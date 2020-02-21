require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Nicolas Dutour | Dév Web`,
    description: `Portfolio de Nicolas Dutour qui décrit les compétences en Html, Css, Javascript, React, Redux, Gatsby, Bootstrap, Styled-Components, jQuery, Material UI, NodeJs, PpostGreSql, Python, Django, MongoDB, ExpressJs, GraphQl. Il présente aussi mes différents projets réalisés`,
    author: `Nicolas Dutour`,
    siteUrl: `https://nicolas-dutour.netlify.com/`,
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
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://nicolas-dutour.netlify.com/",
        sitemap: "https://nicolas-dutour.netlify.com/sitemap.xml",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio Nicolas Dutour Développeur Web`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-99715452-2",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
