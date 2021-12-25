module.exports = {
   siteMetadata: {
      title: 'Ladenie a oprava klavírov',
      siteUrl: 'https://ladenie-klavirov.sk',
      titleTemplate: '%s · Ladenie a oprava klavírov',
      description: 'Profesionálne ladenie a oprava klavírov',
      image: '/insidePiano.jpg',
   },
   plugins: [
      'gatsby-plugin-postcss',
      'gatsby-plugin-zopfli',
      {
         resolve: `gatsby-plugin-s3`,
         options: {
            bucketName: 'ladenie-klavirov.sk',
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
