/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `What would you like to call your site?✔ · My First Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [],
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-XXXXXXXXX-X", // replace "UA-XXXXXXXXX-X" with your Tracking ID
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        sampleRate: 100,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com", // replace "example.com" with your domain
      },
    },
  ],
}

