import { motion, Variants } from 'framer-motion';
import React from 'react';

export const cardVariants: Variants = {
   offscreen: {
      y: 400,
      opacity: 0,
   },
   onscreen: {
      opacity: 1,
      y: 0,
      transition: {
         ease: 'easeOut',
         duration: 0.4,
      },
   },
};

export const AnimOnScroll = ({
   children,
   margin = '220px',
   el = 'div',
}: {
   children: JSX.Element;
   margin?: string;
   el?: 'div' | 'img';
}) => {
   const components = {
      div: motion.div,
      img: motion.img,
   };
   const AnimOnScroll = components[el];
   return (
      <AnimOnScroll
         initial='offscreen'
         whileInView='onscreen'
         viewport={{ margin: `${margin}`, once: true }}
         variants={cardVariants}>
         {children}
      </AnimOnScroll>
   );
};
