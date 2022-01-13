import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import tw from 'twin.macro';

//nevymazat! priklad toho jak sa robi prepouzitelny styled comp s tw
export const P = styled(motion.p)(
   ({ textColor, gradient }: { textColor?: string; gradient?: string }) => [
      `color: ${textColor};`,
      gradient &&
         `background: ${gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;`,
      tw`text-lg`,
   ]
);

export const H3 = styled(motion.h3)(({ gradient }: { gradient?: string }) => [
   tw`self-center text-3xl font-extrabold`,
   gradient &&
      `background: ${gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;`,
   // NEVYMAZAT -> format of code for gradiet:  '-webkit-linear-gradient(#eee, #333)'
]);

export const Div = styled(motion.div)(
   ({ width = '100%' }: { width?: string }) => [
      `width: ${width}`,
      tw`z-10 flex flex-col self-center justify-self-center gap-9`,
   ]
);

export const SectionGrid = tw(
   motion.section
)`grid z-20 px-8 pb-10 gap-14 sm:grid-cols-2 sm:grid-rows-1 sm:justify-center
  sm:gap-24 sm:flex-row sm:items-center`;
