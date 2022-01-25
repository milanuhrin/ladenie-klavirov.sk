import React, { useEffect, useState } from 'react';
import { Divider } from '../Components/Divider';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
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
      <section className='flex relative flex-col items-center w-full min-h-screen'>
         <motion.div
            id='background'
            initial='hidden'
            animate='visible'
            variants={appear('backOut')}
            className='absolute w-full h-screen bg-center bg-no-repeat bg-cover landingBackground'>
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
                  headerText='Profesionál s 35 ročnými skusenosťami'
                  paragraphText='Či už potrebujete naladiť, opraviť, ohodnotiť alebo pomôcť predať či kúpiť klavír, môžete sa na obrátiť mňa. Klavírom a hudobným nástrojom sa venujem prakticky celý život.'
                  img={hero1Image}
                  imgStyle='!max-w-[25rem]'
                  alt='Milan Uhrin, ladič klavírov'
                  loading='eager'
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

<div className='my-10 sm:my-24' />;
