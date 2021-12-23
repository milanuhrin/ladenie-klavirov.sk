module.exports = {
   siteMetadata: {
      siteUrl: 'https://www.yourdomain.tld',
      title: 'My Gatsby Site',
   },
   plugins: [
      'gatsby-plugin-postcss',
      'gatsby-plugin-zopfli',
      'gatsby-plugin-webpack-bundle-analyser-v2',
      {
         resolve: `gatsby-plugin-s3`,
         options: {
            bucketName: 'tatiho-stranka',
         },
      },
      { resolve: `gatsby-plugin-emotion` },
      {
         resolve: 'gatsby-plugin-google-analytics',
         options: {
            trackingId: 'G-QLGH6XXEYR',
         },
      },
      {
         resolve: 'gatsby-plugin-brotli',
         options: {
            extensions: ['css', 'html', 'js', 'svg', 'ttf'],
         },
      },
      'gatsby-plugin-image',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sitemap',
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'images',
            path: `./src/images/`,
         },
         __key: 'images',
      },
   ],
};
