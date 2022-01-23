import { motion } from 'framer-motion';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';
import { Text as MotionText } from './Text';

export const TextImg = (props: Props) => {
   const {
      containerStyle,
      headerText,
      headerStyle,
      paragraphText,
      paragraphStyle,
      textWrapperStyle,
      img,
      alt,
      reversed,
      imgStyleGatsbyImgTag,
      imgStyle,
      loading = 'lazy',
      gradient,
   } = props;
   const Text = motion(MotionText);

   let width = 0;
   if (typeof window !== 'undefined') {
      const { innerWidth } = window;
      width = innerWidth;
   }
   let dynamicStyle;
   console.log('ww', width);
   console.log('res', reversed);
   if (width) {
      console.log('s', dynamicStyle);

      dynamicStyle =
         width > 640 && reversed ? { gridColumn: '1', gridRow: '1' } : {};
   }

   // width > 640 && reversed ? { gridColumn: '1', gridRow: '1' } : {};
   // col-span-1 row-span-2

   return (
      <motion.section
         id='Container'
         className={`${containerStyle} w-full gap-14 sm:grid-cols-2 sm:grid-rows-1 sm:justify-center sm:gap-24 sm:flex-row sm:items-center z-20 grid px-8 pb-10`}>
         {/* Firtst element Text */}
         <Text
            initial='hidden'
            animate='visible'
            paragraphText={paragraphText}
            paragraphStyle={paragraphStyle}
            headerText={headerText}
            headerStyle={headerStyle}
            textWrapperStyle={textWrapperStyle}
            gradient={gradient}
         />

         {/* Second element Img */}
         {typeof img === 'string' ? (
            <motion.img
               className={`${imgStyle}  max-w-[30rem] flex object-cover object-center justify-self-center`}
               style={{ ...dynamicStyle }}
               src={img}
               whileTap={{ scale: 0.55 }}
            />
         ) : (
            dynamicStyle && (
               <GatsbyImage
                  style={{ ...dynamicStyle }}
                  imgStyle={{}}
                  className={`${imgStyle} max-w-[30rem] justify-self-center  rounded-2xl shadow-2xl  flex object-cover object-center `}
                  imgClassName={`${imgStyleGatsbyImgTag} shadow-2xl`}
                  image={img}
                  alt={alt}
                  loading={loading}
               />
            )
         )}
      </motion.section>
   );
};

interface Props {
   // Native
   containerStyle?: string;
   reversed?: boolean;
   loading?: 'lazy' | 'eager';
   gradient?: string;
   // Text Comp
   headerText: string | React.ReactElement;
   headerStyle?: string;
   paragraphText: string | React.ReactElement;
   paragraphStyle?: string;
   textWrapperStyle?: string;
   // Image Comp
   img: IGatsbyImageData | string;
   alt: string;
   imgStyle?: string;
   imgStyleGatsbyImgTag?: string;
}
