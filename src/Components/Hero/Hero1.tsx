import * as React from 'react';
import { Section } from './styles';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { HeroText } from './HeroText';

export const Hero1 = ({
   text,
   title,
   img,
   reversed,
   borderRadius = 'rounded-2xl',
   // imgWidth = 'w-[28rem]',
   imgWidth = 'w-[20rem]',
   textColor = '#6b7280',
   id,
   alt = 'Ladenie a oprava klavírov',
}: {
   text: string;
   title: string;
   img: IGatsbyImageData;
   reversed?: boolean;
   borderRadius?: string;
   imgWidth?: string;
   textColor?: string;
   id?: string;
   alt?: string;
}) => {
   let width = 0;
   if (typeof window !== 'undefined') {
      const { innerWidth } = window;
      width = innerWidth;
   }

   return (
      <Section id={id}>
         {!reversed || width < 500 ? (
            <>
               <HeroText text={text} title={title} textColor={textColor} />
               <GatsbyImage
                  imgClassName={`${borderRadius}  `}
                  image={img}
                  alt='as'
               />
            </>
         ) : (
            <>
               <GatsbyImage
                  imgClassName={`${borderRadius} ${imgWidth} flex object-cover object-center  justify-self-center  `}
                  image={img}
                  alt='as'
               />
               <HeroText text={text} title={title} textColor={textColor} />
            </>
         )}
      </Section>
   );
};
