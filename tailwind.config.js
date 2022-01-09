module.exports = {
   mode: 'jit',
   purge: ['./src/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         backgroundImage: {
            landing: "url('/InsidePiano.jpg')",
         },
         colors: {
            'orange-landing': '#ffb387',
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
