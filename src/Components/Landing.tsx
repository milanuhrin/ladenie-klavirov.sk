import { useEffect, useState } from 'react';
import { SectionDivider } from './export';
import { TextImg } from './TextImg/TextImg';
import { motion } from 'framer-motion';
import { Nav, BlobeSvg } from './export';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import tw from 'twin.macro';
import styled from '@emotion/styled';

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
      <section className='relative flex flex-col items-center w-full min-h-screen '>
         <motion.div
            initial='hidden'
            animate='visible'
            variants={appear()}
            className='absolute w-full h-screen transition-all bg-center bg-no-repeat bg-cover aha'
            style={
               {
                  // animation: ` ${header === 'orange' ? '' : 'mymove 0.5s'} `,
                  // backgroundColor: `${header === 'orange' ? '#ffb387' : 'white'} `,
               }
            }>
            <SectionDivider fill='white' />
         </motion.div>
         <Nav itemsCount={5} />
         <div className='my-10 sm:my-24' />
         <motion.div
            className='z-20 lg:px-20'
            initial='hidden'
            animate='visible'
            variants={appear()}>
            {hero1Image && (
               <TextImg
                  id='landing'
                  title='Profesionál s 35 ročnými skusenosťami'
                  text='
                     Hľadáte licencovaného mechanika klavírov na juhozápadnom Slovensku?
                     Preferujete spoľahlivosť, odbornosť a ľudský prístup?
                     Zdarma poradenstvo či ohodnotenie.
                     Na spokojných zákazníkoch záleží!
                     Som tu pre Vás či už potrebujete naladiť, predať, kúpiť, či ohodnotiť Váš klavír, môžete sa na mňa obrátiť.
                     Som pedant, preto ku každému klavíru pristupujem tak ako ku svojmu vlastnému.

                     Koľko stojí ladenie klavíra?
                     Samozrejme, že Vám cenu nedokážem povedať bez toho, aby som videl, v akom stave je klavír.
                     Preto, keď budem mať najbližšie cestu okolo Vášho regiónu, prídem si ho pozrieť a poviem Vám prípadnú cenu ladenia.

                     Nezvyknem mať pri sebe veľkú hotovosť, koľko maximálne si mám pripraviť?
                     Cena nebude presahovať 220€ ani v prípade, že by si klavír vyžadoval generálku, 
                     kedy si musím zobrať mechaniku k sebe domov, aby som ju opravil.'
                  img={hero1Image}
                  alt='Milan Uhrin, ladič klavírov'
                  loading='eager'
                  gradient='-webkit-linear-gradient(360deg, #0F2027, #203A43, #2C5364)'
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

export const appear = (delay = 0, duration = 0.1) => ({
   hidden: {
      scale: 0.1,
      opacity: 0,
   },
   visible: {
      scale: 1,
      opacity: 1,
      transition: {
         ease: 'easeIn',
         delay: delay,
         duration: duration,
      },
   },
});
