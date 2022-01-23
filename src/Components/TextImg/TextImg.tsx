import { motion } from 'framer-motion';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';
import { Text as MotionText } from './Text';

export const TextImg = (props: Props) => {
   const {
      containerStyle,
      paragraphText,
      paragraphStyle,
      headerText,
      headerStyle,
      textWrapperStyle,
      img,
      alt,
      reversed,
      imgStyleGatsbyImgTag,
      imgStyle = 'max-w-[20rem]',
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
   if (width)
      dynamicStyle =
         width > 640 && reversed ? { gridColumn: '1', gridRow: '1' } : {};

   return (
      <motion.section
         id='Container'
         className={`${containerStyle} gap-14 sm:grid-cols-2 sm:grid-rows-1 sm:justify-center sm:gap-24 sm:flex-row sm:items-center z-20 grid px-8 pb-10`}>
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
               className={`${imgStyle}  flex object-cover object-center justify-self-center`}
               style={{ ...dynamicStyle }}
               src={img}
               whileTap={{ scale: 0.55 }}
            />
         ) : (
            dynamicStyle && (
               <GatsbyImage
                  style={{ ...dynamicStyle }}
                  imgStyle={{}}
                  className={`${imgStyle} justify-self-center rounded-2xl shadow-2xl  flex object-cover object-center `}
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
   paragraphText: string | React.ReactElement;
   paragraphStyle?: string;
   headerText: string | React.ReactElement;
   headerStyle?: string;
   textWrapperStyle?: string;
   // Image Comp
   img: IGatsbyImageData | string;
   alt: string;
   imgStyle?: string;
   imgStyleGatsbyImgTag?: string;
}
