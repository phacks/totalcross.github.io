module.exports = {
  siteMetadata: {
    title: `TOTALCROSS`,
    description: `Open Source GUI Creator For Embedded, Mobile... Everything!!`,
    author: `NATHALIE RISBAKK AND VICTORIA INGRID`,
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
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: "1234567",
        respectDNT: true,
        productionOnly: true,
      },
    },
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
        id: 1858160,
        sv: 6,
      },
    },
  ],
};
