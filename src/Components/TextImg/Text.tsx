import { motion } from 'framer-motion';
import React from 'react';

export const Text = React.forwardRef((props: Props, ref: any) => {
   const {
      paragraphText,
      paragraphStyle,
      headerText,
      headerStyle,
      textWrapperStyle,
      gradient,
   } = props;
   console.log(gradient);

   return (
      <motion.div
         id='textWrapper'
         className={` ${textWrapperStyle} text-center w-full z-10 flex flex-col self-center justify-self-center gap-9 sm:w-[100%]`}
         ref={ref}>
         {headerText && (
            <motion.h3
               style={{
                  background: `-webkit-linear-gradient( ${gradient} )`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
               }}
               className={`${headerStyle}  text-center text-4xl font-extrabold`}>
               {headerText}
            </motion.h3>
         )}
         {paragraphText && (
            <motion.p className={`${paragraphStyle} black text-xl  `}>
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
   gradient?: string;
}
