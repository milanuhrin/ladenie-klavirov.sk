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
)`grid px-8 pb-10 gap-14 sm:grid-cols-2 sm:grid-rows-1 sm:justify-center
  sm:gap-24 sm:flex-row sm:items-center`;
