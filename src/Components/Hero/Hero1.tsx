import * as React from 'react';
import { Section } from './styles';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { HeroText as MotionHeroText } from './HeroText';
import { appear } from '../Landing';
import { motion } from 'framer-motion';

export const Hero1 = (props: Props) => {
   const {
      text,
      title,
      img,
      alt,
      reversed,
      borderRadius = 'rounded-2xl',
      imgMaxWidth = 'max-w-[20rem]',
      textColor = '#6b7280',
      id,
      loading = 'lazy',
   } = props;
   const HeroText = motion(MotionHeroText);

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
      <Section id={id}>
         <HeroText
            initial='hidden'
            animate='visible'
            variants={appear()}
            text={text}
            title={title}
            textColor={textColor}
         />
         {dynamicStyle && (
            <GatsbyImage
               style={{ ...dynamicStyle }}
               imgStyle={{}}
               className={`${imgMaxWidth} ${borderRadius} shadow-2xl  flex object-cover object-center justify-self-center`}
               imgClassName={`shadow-2xl  ${borderRadius} `}
               image={img}
               alt={alt}
               loading={loading}
            />
         )}
      </Section>
   );
};

interface Props {
   text: string;
   title: string;
   img: IGatsbyImageData;
   alt: string;
   reversed?: boolean;
   borderRadius?: string;
   imgMaxWidth?: string;
   textColor?: string;
   id?: string;
   loading?: 'lazy' | 'eager';
}
