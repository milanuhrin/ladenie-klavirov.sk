import { motion } from 'framer-motion';
import React from 'react';
import { appear } from '../Landing';
const Path = (props: any) => (
   <motion.path
      fill='transparent'
      strokeWidth='3'
      className=' stroke-darkSilver'
      strokeLinecap='round'
      {...props}
   />
);

export const MenuToggle = ({ toggle }: any) => (
   <motion.button
      variants={appear()}
      onClick={toggle}
      className='z-50 w-[35px] h-[35px]'>
      <svg width='100%' viewBox='0 0 23 19'>
         <Path
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' }
            }}
         />
         <Path
            d='M 2 9.423 L 20 9.423'
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0 }}
         />
         <Path
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' }
            }}
         />
      </svg>
   </motion.button>
);
