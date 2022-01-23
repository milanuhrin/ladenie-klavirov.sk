import { motion } from 'framer-motion';
import React from 'react';

export const Text = React.forwardRef((props: Props, ref: any) => {
   const {
      paragraphText,
      paragraphStyle,
      headerText,
      headerStyle,
      textWrapperStyle,
   } = props;

   return (
      <motion.div
         id='textWrapper'
         className={` ${textWrapperStyle} text-center w-full z-10 flex flex-col self-center justify-self-center gap-9 sm:w-[100%]`}
         ref={ref}>
         {headerText && (
            <motion.h3 className={`${headerStyle} `}>
               <span
                  className={`text-center bg-gradient-to-r from-snakeGr1 to-snakeGr2 text-4xl font-extrabold text-transparent bg-clip-text `}>
                  {headerText}
               </span>
            </motion.h3>
         )}
         {paragraphText && (
            <motion.p className={`${paragraphStyle} black  text-xl  `}>
               {paragraphText}
            </motion.p>
         )}
      </motion.div>
   );
});
interface Props {
   paragraphText?: string | React.ReactElement;
   paragraphStyle?: string;
   headerText?: string | React.ReactElement;
   headerStyle?: string;
   textWrapperStyle?: string;
}
