module.exports = {
   mode: 'jit',
   purge: ['./src/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         backgroundImage: {
            landing: "url('/InsidePiano.jpg')",
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
