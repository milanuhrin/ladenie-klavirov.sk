import React from 'react';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { useEffect, useState } from 'react';
import { Nav, SectionDivider } from './export';
import { TextImg } from './TextImg/TextImg';
import { snakeGradient } from '../Utilities/colors';

export const Landing = () => {
   const [header, setHeader] = useState('orange');

   const listenScrollEvent = () => {
      if (window.scrollY < 120) {
         return setHeader('orange');
      } else if (window.scrollY > 120) {
         return setHeader('white');
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
      return () => window.removeEventListener('scroll', listenScrollEvent);
   }, []);

   const data = useStaticQuery(graphql`
      {
         file(relativePath: { eq: "milan-fb.jpg" }) {
            childImageSharp {
               gatsbyImageData(placeholder: BLURRED)
            }
         }
      }
   `);
   const hero1Image = getImage(data.file);

   return (
      <section className=' relative flex flex-col items-center w-full min-h-screen'>
         <motion.div
            id='background'
            initial='hidden'
            animate='visible'
            variants={appear('backOut')}
            className='landingBackground absolute w-full h-screen bg-center bg-no-repeat bg-cover'>
            <SectionDivider fill='white' />
         </motion.div>

         <Nav itemsCount={5} />
         <div id='gap' className='bg-transparent  w-full sm:h-[12rem] h-[5rem]'>
            asdas
         </div>
         <motion.div
            className=' z-20'
            initial='hidden'
            animate='visible'
            variants={appear('backOut')}>
            {hero1Image && (
               <TextImg
                  headerText='Profesionál s 35 ročnými skusenosťami'
                  paragraphText='Či už potrebujete naladiť, opraviť, ohodnotiť alebo pomôcť predať či kúpiť klavír, môžete sa na obrátiť mňa. Klavírom a hudobným nástrojom sa venujem prakticky celý život.'
                  img={hero1Image}
                  imgStyle='!max-w-[25rem]'
                  alt='Milan Uhrin, ladič klavírov'
                  loading='eager'
                  gradient={`360deg, ${snakeGradient[1]}, ${snakeGradient[2]},${snakeGradient[3]}`}
               />
            )}
         </motion.div>
         {/* <motion.div initial='hidden' animate='visible' variants={appear()}>
            {header === 'orange' && <BlobeSvg height={250} right={250} />}
            {header === 'orange' && <BlobeSvg height={450} left={-20} />}
         </motion.div> */}
      </section>
   );
};

<div className='sm:my-24 my-10' />;

export const appear = (ease = 'easeOut', delay = 0, duration = 1) => ({
   hidden: {
      scale: 0,
      opacity: 0,
   },
   visible: {
      scale: 1,
      opacity: 1,
      transition: {
         ease: ease,
         delay: delay,
         duration: duration,
      },
   },
});
