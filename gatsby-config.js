module.exports = {
  siteMetadata: {
    title: "All COVID Info",
    titleTemplate: "%s · All COVID Info",
    description: `A consolidation of all resources to battle COVID-19, collected from various sources and presented in a user friendly interface.`,
    url: "https://all-covid-info.me", // No trailing slash allowed!
    image: "/images/all-covid-info.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@yashkumarverma",
    author: "Yash Kumar Verma <yk.verma2000@gmail.com>",
    siteUrl: "https://all-covid-info.me",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-35NGQJ7KVP", // Google Analytics / GA
        ],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          exclude: [],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `All-Covid-Info.me`,
        short_name: `All-COVID-Info.me`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
