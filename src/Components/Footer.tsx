import { motion } from 'framer-motion';
import { cardVariants } from './export';
import tw from 'twin.macro';

interface Props {
   colorFrom?: string;
   colorTo?: string;
}
export const Footer = (props: Props) => {
   const { colorFrom, colorTo } = props;

   return (
      <Wrapper
         id='contact'
         initial='offscreen'
         whileInView='onscreen'
         viewport={{ margin: `60px`, once: true }}
         variants={{
            ...cardVariants,
            offscreen: {
               y: 150,
            },
         }}>
         <h1 className='text-3xl font-extrabold'>Kontakt</h1>

         <div className='flex items-center justify-center max-w-xs '>
            <a
               target='_blank'
               rel='noreferrer'
               href='https://www.facebook.com/milan.uhrin.5'
               className='text-blue-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white'
               aria-label='Facebook'>
               <svg
                  width='20'
                  height='20'
                  fill='currentColor'
                  className='text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white'
                  viewBox='0 0 1792 1792'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z'></path>
               </svg>
            </a>
         </div>
         <div className='flex items-center justify-center font-light text-center text-gray-500 '>
            <span>Milan Uhrin, 0905 405 802, uhrinmilan@gmail.com</span>
         </div>
      </Wrapper>
   );
};

const Wrapper = tw(
   motion.footer
)`flex flex-col items-center justify-center w-full pt-12 
 pb-10 sm:pt-16 bg-gradient-to-b from-[#fafbff] to-indigo-200
 gap-7 md:gap-10 lg:pt-24 `;
