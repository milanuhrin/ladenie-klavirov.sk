import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = (props: Props) => {
  const { text, link, toggleOpen } = props;

  return (
      <motion.li
         className='my-[1rem] text-mediumSilver font-bold'
         variants={variants}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.8 }}>
         <Link
            onClick={() => toggleOpen()}
            className='w-[12rem] h-[2rem] flex'
            to={link}
            aria-label={text}>
            {text}
         </Link>
      </motion.li>
  );
};

interface Props {
   i: number;
   text: string;
   link: string;
   toggleOpen: () => void;
}
