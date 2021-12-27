module.exports = {
   siteMetadata: {
      title: 'Ladenie a oprava klavírov',
      siteUrl: 'https://ladenie-klavirov.sk',
      titleTemplate: '%s · Ladenie a oprava klavírov',
      description: 'Profesionálne ladenie a oprava klavírov',
      image: '/milan-fb.jpg',
   },
   plugins: [
      'gatsby-plugin-postcss',
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
      'gatsby-plugin-image',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sitemap',
      {
         resolve: `gatsby-plugin-sharp`,
         options: {
            defaults: {
               formats: [`auto`, `avif`],
               breakpoints: [500, 750, 1080, 1366, 1920],
            },
         },
      },
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
