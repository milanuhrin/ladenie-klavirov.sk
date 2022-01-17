import * as React from 'react';
import { SectionGrid } from './styles';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Text as MotionText } from './Text';
import { appear } from '../Landing';
import { motion } from 'framer-motion';

export const TextImg = (props: Props) => {
   const {
      text,
      title,
      img,
      alt,
      reversed,
      borderRadius = 'rounded-2xl',
      imgMaxWidth = 'max-w-[20rem]',
      textColor,
      id,
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
      <SectionGrid id={id}>
         {/* Firtst element */}
         <Text
            initial='hidden'
            animate='visible'
            text={text}
            title={title}
            textColor={textColor}
            gradient={gradient}
         />

         {/* Second element */}
         {typeof img === 'string' ? (
            <motion.img
               className={`${imgMaxWidth}  flex object-cover object-center justify-self-center`}
               style={{ ...dynamicStyle }}
               src={img}
               whileTap={{ scale: 0.55 }}
            />
         ) : (
            dynamicStyle && (
               <motion.div
                  whileTap={{ scale: 0.95 }}
                  className='justify-self-center'>
                  <GatsbyImage
                     style={{ ...dynamicStyle }}
                     imgStyle={{}}
                     className={`${imgMaxWidth} ${borderRadius} shadow-2xl  flex object-cover object-center `}
                     imgClassName={`shadow-2xl  ${borderRadius} `}
                     image={img}
                     alt={alt}
                     loading={loading}
                  />
               </motion.div>
            )
         )}
      </SectionGrid>
   );
};

interface Props {
   text: string | React.ReactElement;
   title: string;
   img: IGatsbyImageData | string;
   alt: string;
   reversed?: boolean;
   borderRadius?: string;
   imgMaxWidth?: string;
   textColor?: string;
   id?: string;
   loading?: 'lazy' | 'eager';
   gradient?: string;
}
