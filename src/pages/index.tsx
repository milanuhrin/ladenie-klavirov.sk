import * as React from 'react';
import 'tailwindcss/dist/base.min.css';
import '../../global.css';
import {
   motion,
   useMotionValue,
   useTransform,
   useReducedMotion,
   useViewportScroll,
   useCycle,
} from 'framer-motion';
import {
   AnimOnScroll,
   Footer,
   Hero2,
   TextImg,
   Landing,
} from '../Components/export';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import SEO from '../Components/seo.js';

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

   // const [isOpen, toggleOpen] = useCycle(false, true);
   // const containerRef = useRef(null);
   // const { height } = useDimensions(containerRef);
   return (
      <>
         <SEO />
         <main>
            {/* <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
               <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav> */}
            {/* <MenuMain /> */}
            <Landing />
            {/* <motion.div
               id='ahoj'
               style={{ y: y }}
               className='z-0 w-40 h-40 bg-gradient-to-br from-[#C9D6FF] to-[#E2E2E2]'
            /> */}
            {/* <motion.svg
               viewBox='0 0 200 200'
               xmlns='http://www.w3.org/2000/svg'
               style={{ y: y }}
               width='50px'>
               <defs>
                  <linearGradient id='MyGradient' x2='50%' y2='100%'>
                     <stop offset='5%' stop-color='#e6ebff' />
                     <stop offset='95%' stop-color='#faf9f9' />
                  </linearGradient>
               </defs>
               <path
                  fill='url(#MyGradient)'
                  d='M67.9,-28.6C73.2,-5.7,52.6,19.2,28.5,36C4.3,52.7,-23.3,61.4,-43.4,49.3C-63.6,37.1,-76.2,4.2,-67.7,-23.1C-59.2,-50.4,-29.6,-71.9,0.9,-72.2C31.3,-72.5,62.6,-51.5,67.9,-28.6Z'
                  transform='translate(70% 70%)'
               />
            </motion.svg> */}
            <svg
               id='sw-js-blob-svg'
               viewBox='0 0 200 200'
               xmlns='http://www.w3.org/2000/svg'>
               <defs>
                  <linearGradient id='sw-gradient' x1='0' x2='1' y1='1' y2='0'>
                     <stop
                        id='stop1'
                        stop-color='rgba(201, 214, 255, 1)'
                        offset='0%'></stop>{' '}
                     <stop
                        id='stop2'
                        stop-color='rgba(226, 226, 226, 1)'
                        offset='100%'></stop>{' '}
                  </linearGradient>{' '}
               </defs>
               <g
               // x='5'
               // y='5'
               // width='40'
               // height='40'
               // transform='translate(30 50)'
               >
                  <rect x='5' y='5' width='40' height='40' fill='green' />
                  <path
                     fill='url(#sw-gradient)'
                     d='M24.3,-29.4C31.3,-23,36.8,-15.2,35.8,-8.2C34.8,-1.1,27.4,5.2,23.1,14.1C18.8,22.9,17.7,34.3,12.6,37.3C7.5,40.3,-1.6,34.9,-8,29.4C-14.5,23.9,-18.3,18.3,-21.3,12.5C-24.4,6.8,-26.8,0.8,-26.7,-5.5C-26.5,-11.9,-23.9,-18.6,-19,-25.3C-14.1,-32.1,-7.1,-38.8,0.8,-39.8C8.6,-40.7,17.3,-35.8,24.3,-29.4Z'
                     // width='100%'
                     // height='100%'

                     // stroke-width='0'
                     // style='transition: all 0.3s ease 0s;'
                  ></path>{' '}
               </g>
            </svg>

            <div id='ahoj' className='flex flex-col '>
               {hero2img1 && hero2img2 && hero2img3 && hero2img4 && (
                  <Hero2
                     img1={hero2img1}
                     img2={hero2img2}
                     img3={hero2img3}
                     img4={hero2img4}
                     textWidth='70%'
                     gradient='-webkit-linear-gradient(360deg, #0F2027, #203A43, #2C5364)'
                  />
               )}

               <TextImgWrapper>
                  {hero1freeTime && (
                     <AnimOnScroll>
                        <TextImg
                           id='aboutMe'
                           title='Pár slov o mne'
                           text='Mojim najväčším hobby sa za posledných 5 rokov stalo neprofesionálne fotenie. Podarilo sa mi dosiahnuť prvenstvá či už v slovenských ale aj medzinárodných súťažiach. Najlepšie fotky sú prezentované na dočasných voľne dostupných výstavách či múzeách.'
                           img={hero1freeTime}
                           alt='Vo voľnom čase'
                           imgMaxWidth='max-w-[25rem]'
                           gradient='-webkit-linear-gradient(360deg, #0F2027, #203A43, #2C5364)'
                        />
                     </AnimOnScroll>
                  )}
                  {hero1insidePiano && (
                     <AnimOnScroll>
                        <TextImg
                           reversed
                           id='education'
                           title='Vzdelanie'
                           text='Vyštudoval som odbornú školu v Hradci Králové v Českej republike. Stal som sa tam mechanikom hudobných nástrojov, naučil sa opraviť klavír správne tak, aby fungoval najbližšie roky.'
                           img={hero1insidePiano}
                           alt='Vnútro klavíru'
                           imgMaxWidth='max-w-[25rem]'
                           gradient='-webkit-linear-gradient(180deg, #0F2027, #203A43, #2C5364)'
                        />
                     </AnimOnScroll>
                  )}
               </TextImgWrapper>
               <Footer />
            </div>
         </main>
      </>
   );
};

export const TextImgWrapper = tw(
   motion.section
)`relative z-10 flex flex-col items-center gap-10 pt-16 bg-gradient-to-b from-white via-indigo-50 to-white md:gap-20 lg:px-20`;

export default IndexPage;
