import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Divider } from './Divider';
import { Nav, SectionDivider } from './export';
import { TextImg } from './TextImg/TextImg';

export const appear = (ease = 'easeOut', delay = 0, duration = 1) => ({
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: ease,
      delay: delay,
      duration: duration
    }
  }
});
export const Landing = () => {
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
      <section className='flex relative flex-col items-center w-full min-h-screen'>
         {/* <Daco/> */}
         <motion.div
            id='background'
            initial='hidden'
            animate='visible'
            variants={appear('backOut')}
            className='absolute w-full h-screen bg-center bg-no-repeat bg-cover landingBackground'

            >
            <SectionDivider fill='white' />
         </motion.div>

         <Nav itemsCount={5} />
         <Divider />
         <motion.div
            className='z-20 '
            initial='hidden'
            animate='visible'
            variants={appear('backOut')}>
            {hero1Image && (
               <TextImg
                  headerText='Profesionál s 35 ročnými skúsenosťami'
                  paragraphText='Či už potrebujete naladiť, opraviť, ohodnotiť alebo pomôcť predať či kúpiť klavír, môžete sa na obrátiť mňa. Klavírom a hudobným nástrojom sa venujem prakticky celý život.'
                  img={hero1Image}
                  imgStyle='!max-w-[25rem]'
                  alt='Milan Uhrin, ladič klavírov'
                  loading='eager'
               />
            )}
         </motion.div>
      </section>
  );
};

<div className='my-10 sm:my-24' />;
