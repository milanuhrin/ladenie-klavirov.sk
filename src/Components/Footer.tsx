import { motion } from 'framer-motion';
import { cardVariants } from './export';
import React from 'react';

interface Props {
   colorFrom?: string;
   colorTo?: string;
}
export const Footer = (props: Props) => {
  const { colorFrom, colorTo } = props;

  return (
      <motion.footer
         id='contact'
         className='bg-silver gap-7 sm:gap-6 sm:py-12 flex flex-col items-center justify-center w-full py-10'
         initial='offscreen'
         whileInView='onscreen'
         viewport={{ margin: '60px', once: true }}
         variants={{
           ...cardVariants,
           offscreen: {
             y: 150
           }
         }}>
         <h1 className='text-3xl font-extrabold bg-gradient-to-r from-snakeGr1 to-snakeGr2 text-transparent bg-clip-text'>
            Kontakt
         </h1>

         <div className=' flex items-center justify-center max-w-xs'>
            <a
               target='_blank'
               rel='noreferrer'
               href='https://www.facebook.com/milan.uhrin.5'
               className='hover:text-gray-800 dark:hover:text-white text-blue-400 transition-colors duration-200'
               aria-label='Facebook'>
               <svg
                  width='20'
                  height='20'
                  fill='currentColor'
                  className='hover:text-gray-800 dark:hover:text-white text-xl transition-colors duration-200'
                  viewBox='0 0 1792 1792'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z'></path>
               </svg>
            </a>
         </div>
         <div className=' flex items-center justify-center font-light text-center text-gray-500'>
            <span>Milan Uhrin, 0905 405 802, uhrinmilan@gmail.com</span>
         </div>
      </motion.footer>
  );
};
