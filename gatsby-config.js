module.exports = {
  siteMetadata: {
    title: `TOTALCROSS`,
    titleTemplate: "%s · GUI Creator For Embedded, Mobile... Everything!",
    description: `Open Source GUI Creator For Embedded, Mobile... Everything!!`,
    author: `Totalcross`,
    siteUrl: `https://totalcross.com/`,
    url: `https://totalcross.com`,
    image: `${__dirname}/static/totalcross_logo.png`,
    twitterUsername: `@totalcross`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-43172763-2",
        head: false,
        anonymize: true,
        respectDNT: true,
        defer: false,
      },
    },
    "gatsby-theme-docz",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `imgs`,
        path: `${__dirname}/src/imgs/`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/docs/*`, `/docs`],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Pacifico",
            "Poppins:300,500,700,800",
            "Roboto:100,200,300,400,500",
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 479399,
        sv: 6,
      },
    },
  ],
};
