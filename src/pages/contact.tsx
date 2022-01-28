import { motion } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Footer, Nav } from '../Components/export'

const Contact = () => {
  const logo = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo-black.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)
  return (
    <>
      <Nav logo={logo} />
      <motion.main>
        {/* <TextImgWrapper> */}
        {/* <TextImg
               title='Neváhajte a zavolajte mi pre viac informácii'
               img={PianoIllustration}
               alt='animovaný obrázok s dvomi ľudmi pri klavíri'
               imgMaxWidth='max-w-[24rem]'
               text={
                  <>
                     Telefónne číslo: <b>0905 405 802</b>
                  </>
               }
            /> */}
        {/* </TextImgWrapper> */}
      </motion.main>
      <Footer />
    </>
  )
}
export default Contact
