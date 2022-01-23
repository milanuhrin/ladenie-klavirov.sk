import { SectionDivider } from './export';
import { cardVariants } from './AnimOnScroll';
import { motion } from 'framer-motion';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Text as MotionText } from './TextImg/Text';
import { appear } from './Landing';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Text = motion(MotionText);

export const Hero2 = (props: Props) => {
   const { img1, img2, img3, img4, textWidth = '100%', gradient } = props;
   const images = [img1, img2, img3, img4];

   // FFFBF1
   return (
      <motion.section
         id='container'
         className=' md:grid bg-gradient-to-b from-white to-silver lg:px-20 md:grid-cols-2 md:grid-rows-1 md:gap-8 md:items-center sm:px-6 md:px-8 md:pt-20 relative flex flex-col max-w-full gap-10 px-8 pb-16'>
         <motion.div
            id='textWrapper'
            className='md:col-start-2rustywind md:row-start-1 md:self-center justify-self-center md:max-w-2xl flex flex-col gap-6 ml-auto'
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ margin: '400px', once: true }}
            variants={cardVariants}>
            <Text
               initial='hidden'
               animate='visible'
               variants={appear()}
               headerText='Skúsenosti'
               paragraphText='Oblasť môjho pôsobenia je najmä západné a stredné slovensko kde
               ladím a zastrešujem vačšinu hudobných škôl a domácností, ktoré sa
               rozhodli zavolať odborníka.'
               gradient={gradient}
            />
            <div className='my-4' />
            <ul
               className={`${textWidth}  flex-col self-center gap-6 md:grid md:grid-cols-2 flex justify-self-center`}>
               {pole.map((name) => (
                  <motion.li className='lg:mt-0 flex' key={uuidv4()}>
                     <motion.span className='flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full'>
                        <svg
                           className='w-4 h-4'
                           viewBox='0 0 20 20'
                           fill='currentColor'>
                           <path
                              fillRule='evenodd'
                              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                              clipRule='evenodd'></path>
                        </svg>
                     </motion.span>
                     <motion.span className='ml-4 text-base font-medium leading-6 text-gray-500'>
                        {name}
                     </motion.span>
                  </motion.li>
               ))}
            </ul>
         </motion.div>

         <motion.div
            id='imageWrapper'
            className='md:col-start-1 md:row-start-1 z-10 grid grid-cols-12 grid-rows-2 gap-4'>
            {ha.map((item, index) => (
               <motion.div
                  key={uuidv4()}
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
                  className={`z-20 rounded-lg h-auto ${item.class}`}>
                  <GatsbyImage
                     imgClassName={`rounded-lg `}
                     className={`rounded-lg shadow-xl`}
                     image={images[index]}
                     alt='as'
                  />
               </motion.div>
            ))}
         </motion.div>
         <SectionDivider />
      </motion.section>
   );
};

interface Props {
   img1: IGatsbyImageData;
   img2: IGatsbyImageData;
   img3: IGatsbyImageData;
   img4: IGatsbyImageData;
   textWidth?: string;
   gradient?: string;
}
const ha = [
   {
      alt: '2',
      class: ' object-contain col-span-6 w-[100%]   self-end ',
   },
   {
      alt: '2',
      class: ' w-[80%]    self-end col-span-6 ',
   },
   {
      alt: '2',
      class: ' w-[75%] justify-self-end  col-span-5',
   },
   {
      alt: '2',
      class: 'w-[90%]   col-span-6',
   },
];

const pole = [
   'Hudobné školy',
   'Profesionálny hudobníci',
   'Rekreační amatéri',
   'Oprava mechaniky',
];
