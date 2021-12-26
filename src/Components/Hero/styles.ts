import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import tw from 'twin.macro';

export const P = styled(motion.p)(({ textColor }: { textColor?: string }) => [
   `color: ${textColor};`,
   tw`text-lg leading-6`,
]);
export const H3 = tw(motion.h3)`self-center text-3xl font-extrabold`;
export const Div = tw(motion.div)` z-10 flex flex-col w-full gap-9`;
export const Section = tw(
   motion.section
)`grid px-8 pb-10 gap-14 md:grid-cols-2 md:grid-rows-1 md:justify-center
  md:gap-24 md:flex-row md:items-center`;
