import * as React from 'react';
import 'tailwindcss/dist/base.min.css';
import '../../global.css';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
   AnimOnScroll,
   Footer,
   Hero2,
   Hero1,
   Landing,
} from '../Components/export';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import SEO from '../Components/seo.js';

const IndexPage = () => {
   useEffect(() => {
      document.documentElement.lang = 'sk';
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
      <div>
         <SEO />
         <main>
            <Landing />
            <div className='flex flex-col '>
               <Hero2
                  img1={hero2img1}
                  img2={hero2img2}
                  img3={hero2img3}
                  img4={hero2img4}
               />
               <div className='relative z-10 flex flex-col items-center gap-10 pt-16 bg-gradient-to-b from-white via-indigo-50 to-white md:gap-20 lg:px-20'>
                  {hero1freeTime && (
                     <AnimOnScroll>
                        <Hero1
                           id='aboutMe'
                           title='Pár slov o mne'
                           text='Mojim najväčším hobby sa za posledných 5 rokov stalo neprofesionálne fotenie. Podarilo sa mi dosiahnuť prvenstvá či už v slovenských ale aj medzinárodných súťažiach. Najlepšie fotky sú prezentované na dočasných voľne dostupných výstavách či múzeách.'
                           img={hero1freeTime}
                           alt='Vo voľnom čase'
                           imgMaxWidth='max-w-[25rem]'
                        />
                     </AnimOnScroll>
                  )}
                  {hero1insidePiano && (
                     <AnimOnScroll>
                        <Hero1
                           reversed
                           id='education'
                           title='Vzdelanie'
                           text='Vyštudoval som odbornú školu v Hradci Králové, Česká rep. Stal som sa tam mechanikom hudobných nástrojov, naučil sa opraviť klavír správne tak, aby fungoval najbližšie roky.'
                           img={hero1insidePiano}
                           alt='Vnútro klavíru'
                           imgMaxWidth='max-w-[25rem]'
                        />
                     </AnimOnScroll>
                  )}
               </div>
               <Footer />
            </div>
         </main>
      </div>
   );
};

export default IndexPage;
