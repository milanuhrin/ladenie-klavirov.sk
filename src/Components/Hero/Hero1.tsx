import * as React from 'react';
import { Section } from './styles';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { HeroText } from './HeroText';

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
   } = props;

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
         <HeroText text={text} title={title} textColor={textColor} />
         {dynamicStyle && (
            <GatsbyImage
               style={{ ...dynamicStyle }}
               imgStyle={{}}
               className={`${imgMaxWidth} flex object-cover object-center  justify-self-center`}
               imgClassName={`${borderRadius}  `}
               image={img}
               alt={alt}
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
}
