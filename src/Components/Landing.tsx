import { SectionDivider } from 'Components/export'
import { TextImg } from 'Components/TextImg/TextImg'
import { motion } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import { appear } from 'Utilities/motionVariants'
import { Navigation } from './Navigation/Navigation'
interface Props {
   containerStyles?: string
}

export const Landing = (props: Props) => {
   const { containerStyles } = props
   const data = useStaticQuery(graphql`
      {
         file(relativePath: { eq: "milan-fb.jpg" }) {
            childImageSharp {
               gatsbyImageData(placeholder: BLURRED)
            }
         }
      }
   `)

   const hero1Image = getImage(data.file)
   let width = 0
   if (typeof window !== 'undefined') {
      const { innerWidth } = window
      width = innerWidth
   }
   const HeroBackgroundHeight =
      (width > 640 && width < 900 && 'min-h-[60vh]') ||
      (width > 900 && 'min-h-[80vh]')

   return (
      <>
         {/* Fixed Navigation */}
         <Navigation />
         {/* Content Container */}
         {/* <div className='h-[10rem] sm:h-[85px] w-full' /> */}

         <motion.section
            className={`${containerStyles}  ${HeroBackgroundHeight} z-20  relative sm:pt-[4rem] landingBackground w-full bg-cover bg-center bg-no-repeat`}
            initial='hidden'
            animate='visible'
            variants={appear('backOut')}>
            {hero1Image && (
               <TextImg
                  headerText='Profesionál s 35 ročnými skúsenosťami'
                  paragraphText='Či už potrebujete naladiť, opraviť, ohodnotiť alebo pomôcť predať či kúpiť klavír, môžete sa na obrátiť mňa. Klavírom a hudobným nástrojom sa venujem prakticky celý život.'
                  img={hero1Image}
                  imgStyle='!max-w-[25rem]'
                  alt='Milan Uhrin, ladič klavírov'
                  loading='eager'
                  containerStyles='padding-Y-3-6rem '
               />
            )}
            {/* Absolute Wavy Section Divider */}
            <SectionDivider fill='white' />
         </motion.section>
      </>
   )
}
