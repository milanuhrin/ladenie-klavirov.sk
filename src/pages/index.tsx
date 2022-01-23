import * as React from 'react';
// import 'tailwindcss/dist/base.min.css';
import '../../global.css';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import {
   AnimOnScroll,
   Footer,
   Hero2,
   TextImg,
   Landing,
} from '../Components/export';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import SEO from '../Components/seo.js';
import { snakeGradient } from '../Utilities/colors';

const IndexPage = () => {
   const { scrollY } = useViewportScroll();
   const y = useTransform(scrollY, [0, 1], [0, -0.2], {
      clamp: false,
   });

   const data = useStaticQuery(graphql`
      {
         a: file(relativePath: { eq: "freeTime.jpg" }) {
            childImageSharp {
               gatsbyImageData(placeholder: BLURRED)
            }
         }
         b: file(relativePath: { eq: "insidePiano.jpg" }) {
            childImageSharp {
               gatsbyImageData(placeholder: BLURRED)
            }
         }
         c: file(relativePath: { eq: "pianoCloseLook.jpg" }) {
            childImageSharp {
               gatsbyImageData(placeholder: BLURRED)
            }
         }
         d: file(relativePath: { eq: "luxuryPiano.jpg" }) {
            childImageSharp {
               gatsbyImageData(placeholder: BLURRED)
            }
         }
         e: file(relativePath: { eq: "pianoOutSide.jpg" }) {
            childImageSharp {
               gatsbyImageData(placeholder: BLURRED)
            }
         }
         f: file(relativePath: { eq: "pianoMotherWithChild.jpg" }) {
            childImageSharp {
               gatsbyImageData(placeholder: BLURRED)
            }
         }
      }
   `);
   const hero1freeTime = getImage(data.a);
   const hero1insidePiano = getImage(data.b);
   const hero2img1 = getImage(data.c);
   const hero2img2 = getImage(data.d);
   const hero2img3 = getImage(data.e);
   const hero2img4 = getImage(data.f);

   return (
      <>
         <SEO />
         <main>
            <Landing />
            <div className='top-20 left-20 absolute w-10 h-10'></div>
            <motion.svg
               id='sw-js-blob-svg'
               style={{ y: y }}
               className='absolute'
               viewBox='0 0 200 200'
               xmlns='http://www.w3.org/2000/svg'>
               <defs>
                  <linearGradient id='sw-gradient' x1='0' x2='1' y1='1' y2='0'>
                     <stop
                        id='stop1'
                        stopColor='rgba(201, 214, 255, 1)'
                        offset='0%'></stop>
                     <stop
                        id='stop2'
                        stopColor='rgba(226, 226, 226, 1)'
                        offset='100%'></stop>
                  </linearGradient>
               </defs>
               <g>
                  <rect x='5' y='5' width='40' height='40' fill='green' />
                  <path
                     fill='url(#sw-gradient)'
                     d='M24.3,-29.4C31.3,-23,36.8,-15.2,35.8,-8.2C34.8,-1.1,27.4,5.2,23.1,14.1C18.8,22.9,17.7,34.3,12.6,37.3C7.5,40.3,-1.6,34.9,-8,29.4C-14.5,23.9,-18.3,18.3,-21.3,12.5C-24.4,6.8,-26.8,0.8,-26.7,-5.5C-26.5,-11.9,-23.9,-18.6,-19,-25.3C-14.1,-32.1,-7.1,-38.8,0.8,-39.8C8.6,-40.7,17.3,-35.8,24.3,-29.4Z'></path>
               </g>
            </motion.svg>

            <div id='mainContent' className='flex flex-col'>
               {hero2img1 && hero2img2 && hero2img3 && hero2img4 && (
                  <Hero2
                     img1={hero2img1}
                     img2={hero2img2}
                     img3={hero2img3}
                     img4={hero2img4}
                     textWidth='70%'
                     gradient={`360deg, ${snakeGradient[1]}, ${snakeGradient[2]},${snakeGradient[3]}`}
                  />
               )}

               <motion.section className='bg-gradient-to-b from-white via-indigo-50 to-white md:gap-36 lg:px-20 relative z-10 flex flex-col items-center gap-10 pt-16'>
                  {hero1freeTime && (
                     <AnimOnScroll>
                        <TextImg
                           headerText='Pár slov o mne'
                           paragraphText='Mojim najväčším hobby sa za posledných 5 rokov stalo fotenie. Podarilo sa mi dosiahnuť prvenstvá či už v slovenských, ale aj medzinárodných súťažiach. Najlepšie fotky sú prezentované na dočasných voľne dostupných výstavách či múzeách.'
                           img={hero1freeTime}
                           alt='Vo voľnom čase'
                           imgStyle='max-w-[25rem]'
                           gradient={`360deg, ${snakeGradient[1]}, ${snakeGradient[2]},${snakeGradient[3]}`}
                        />
                     </AnimOnScroll>
                  )}
                  {hero1insidePiano && (
                     <AnimOnScroll>
                        <TextImg
                           reversed
                           headerText='Vzdelanie'
                           paragraphText='Vyštudoval som odbornú školu SUPŠ HNN v Hradci Králové.'
                           img={hero1insidePiano}
                           alt='Vnútro klavíru'
                           imgStyle='max-w-[25rem]'
                           gradient={`180deg, ${snakeGradient[1]}, ${snakeGradient[2]},${snakeGradient[3]}`}
                        />
                     </AnimOnScroll>
                  )}
               </motion.section>
               <div
                  id='divider'
                  className='sm:pb-[3rem] md:pb-[9rem] pb-[2.58re]'
               />
               <Footer />
            </div>
         </main>
      </>
   );
};

export default IndexPage;
