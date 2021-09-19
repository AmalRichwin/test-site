module.exports = {
  siteMetadata: {
    title: 'Richie',
    titleTemplate: 'Amal Richwin | Richie',
    siteUrl: `https://amalrichwin.xyz/`,
    description: `All about a passionate dev`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-F5Z9LM577Q',
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-offline`,
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Amal Richwin`,
        short_name: `Richie`,
        start_url: `/`,
        background_color: `#0d0d0d`,
        theme_color: `#0d0d0d`,
        icon: 'src/images/favicon-32x32.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
