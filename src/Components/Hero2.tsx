import { SectionDivider } from './export';
import { cardVariants } from './AnimOnScroll';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

export const Hero2 = ({ img1, img2, img3, img4 }: any) => {
   return (
      <Section id='experience'>
         <DivTextWrapper
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ margin: '400px', once: true }}
            variants={cardVariants}>
            <H4>Skúsenosti</H4>
            <P>
               Oblasť môjho pôsobenia je najmä západné a stredné slovensko kde
               ladím a zastrešujem vačšinu hudobných škôl a domácností, ktoré sa
               rozhodli zavolať odborníka.
            </P>

            <Ul>
               <Li>
                  <SpanSvg>
                     <svg
                        className='w-4 h-4'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                           fillRule='evenodd'
                           d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                           clipRule='evenodd'></path>
                     </svg>
                  </SpanSvg>
                  <SpanText>Hudobné školy</SpanText>
               </Li>
               <Li>
                  <SpanSvg>
                     <svg
                        className='w-4 h-4'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                           fillRule='evenodd'
                           d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                           clipRule='evenodd'></path>
                     </svg>
                  </SpanSvg>
                  <SpanText>Profesionálny hudobníci</SpanText>
               </Li>
               <Li>
                  <SpanSvg>
                     <svg
                        className='w-4 h-4'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                           fillRule='evenodd'
                           d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                           clipRule='evenodd'></path>
                     </svg>
                  </SpanSvg>
                  <SpanText>Rekreační amatéri</SpanText>
               </Li>
               <Li>
                  <SpanSvg>
                     <svg
                        className='w-4 h-4'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                           fillRule='evenodd'
                           d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                           clipRule='evenodd'></path>
                     </svg>
                  </SpanSvg>
                  <SpanText>Oprava mechaniky</SpanText>
               </Li>
            </Ul>
         </DivTextWrapper>

         <DivImgsWrapper>
            <motion.div
               initial='offscreen'
               whileInView='onscreen'
               viewport={{ margin: `60px`, once: true }}
               whileHover={{ scale: 1.08 }}
               variants={{
                  ...cardVariants,
                  offscreen: {
                     y: 150,
                  },
               }}
               className='z-20 object-contain col-span-6 w-[100%]  rounded-lg  self-end h-auto  '>
               <GatsbyImage
                  imgClassName={`rounded-lg `}
                  className={`rounded-lg shadow-xl`}
                  image={img1}
                  alt='as'
               />
            </motion.div>
            <motion.div
               initial='offscreen'
               whileInView='onscreen'
               viewport={{ margin: `60px`, once: true }}
               whileHover={{ scale: 1.08 }}
               variants={{
                  ...cardVariants,
                  offscreen: {
                     y: 150,
                  },
               }}
               className='z-20 w-[80%] h-auto  rounded-lg self-end col-span-6 '>
               <GatsbyImage
                  imgClassName={`rounded-lg `}
                  className={`rounded-lg shadow-xl`}
                  image={img2}
                  alt='as'
               />
            </motion.div>
            <motion.div
               whileHover={{ scale: 1.08 }}
               initial='offscreen'
               whileInView='onscreen'
               viewport={{ once: true }}
               variants={{
                  ...cardVariants,
                  offscreen: {
                     y: 150,
                  },
               }}
               className=' w-[75%] justify-self-end  col-span-5  rounded-lg  '>
               <GatsbyImage
                  imgClassName={`rounded-lg  `}
                  className={`rounded-lg shadow-xl`}
                  image={img3}
                  alt='as'
               />
            </motion.div>
            <motion.div
               initial='offscreen'
               whileInView='onscreen'
               viewport={{ margin: `60px`, once: true }}
               whileHover={{ scale: 1.08 }}
               variants={{
                  ...cardVariants,
                  offscreen: {
                     y: 150,
                  },
               }}
               className=' w-[90%]  h-auto rounded-lg   col-span-6'>
               <GatsbyImage
                  imgClassName={`rounded-lg `}
                  className={`rounded-lg shadow-xl`}
                  image={img4}
                  alt='as'
               />
            </motion.div>
         </DivImgsWrapper>
         <SectionDivider />
      </Section>
   );
};

const Section = tw(
   motion.section
)`lg:px-20 pb-16 relative flex flex-col gap-10 px-8 max-w-full  bg-gradient-to-b from-white 
to-[#f7f7f7] md:grid  md:grid-cols-2 md:grid-rows-1 md:gap-8 md:items-center 
sm:px-6 md:px-8 md:pt-20`;
const H4 = tw(
   motion.h4
)`text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9`;
const P = tw(motion.p)`text-lg leading-6 text-gray-500`;
const Ul = tw(motion.ul)`flex flex-col gap-6 mt-8 md:grid md:grid-cols-2`;
const Li = tw(motion.li)`lg:mt-0 flex`;
const SpanText = tw(
   motion.span
)`ml-4 text-base font-medium leading-6 text-gray-500`;
const SpanSvg = tw(motion.span)`flex items-center justify-center flex-shrink-0 
w-6 h-6 text-green-800 bg-green-100 rounded-full`;
const DivTextWrapper = tw(
   motion.div
)`flex flex-col gap-6 ml-auto md:col-start-2 md:row-start-1 md:self-center justify-self-center md:max-w-2xl`;
const DivImgsWrapper = tw(
   motion.div
)`z-10 grid grid-cols-12 grid-rows-2 gap-4 transform md:col-start-1 md:row-start-1 `;
