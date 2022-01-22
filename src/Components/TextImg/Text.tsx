import { motion } from 'framer-motion';
import React from 'react';

export const Text = React.forwardRef((props: Props, ref: any) => {
   const { text, title, textColor = 'black', gradient } = props;
   return (
      <motion.div className='z-10 flex flex-col self-center justify-self-center gap-9 sm:w-[100%]'>
         <motion.h3
            style={{
               background: gradient,
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent',
            }}
            className='self-center text-4xl font-extrabold '>
            {title}
         </motion.h3>

         <motion.p className={`${textColor}  text-xl  `}>{text}</motion.p>
      </motion.div>
   );
});
interface Props {
   text: string | React.ReactElement;
   title: string;
   textColor?: string;
   gradient?: string;
   width?: string;
}
