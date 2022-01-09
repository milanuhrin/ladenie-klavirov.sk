import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import PianoIllustration from '../images/svg/pianoIllustration.svg';
import { TextImgWrapper } from './index';

import tw from 'twin.macro';
import {
   AnimOnScroll,
   Footer,
   Hero2,
   TextImg,
   Landing,
   Nav,
} from '../Components/export';
const Contact = () => {
   console.log(PianoIllustration);

   const logo = useStaticQuery(graphql`
      {
         file(relativePath: { eq: "logo-black.png" }) {
            childImageSharp {
               gatsbyImageData(placeholder: BLURRED)
            }
         }
      }
   `);
   return (
      <>
         <Nav logo={logo} />
         <Main>
            <TextImgWrapper>
               <TextImg
                  title='Neváhajte a zavolajte mi pre viac informácii'
                  img={PianoIllustration}
                  alt='animovaný obrázok s dvomi ľudmi pri klavíri'
                  imgMaxWidth='max-w-[24rem]'
                  text={
                     <>
                        Telefónne číslo: <b>0905 405 802</b>
                     </>
                  }
               />
            </TextImgWrapper>
         </Main>
         <Footer />
      </>
   );
};
export default Contact;

const Main = tw(motion.main)``;
