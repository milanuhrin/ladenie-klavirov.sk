import { motion } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import { Divider } from 'Components/Divider'
import { Nav, SectionDivider } from 'Components/export'
import { TextImg } from 'Components/TextImg/TextImg'

export const appear = (ease = 'easeOut', delay = 0, duration = 1) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: ease,
      delay: delay,
      duration: duration,
    },
  },
})
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
  return (
    <section
      className={`${containerStyles} relative flex min-h-screen w-full flex-col items-center`}>
      {/* <Daco/> */}
      <motion.div
        id='background'
        initial='hidden'
        animate='visible'
        variants={appear('backOut')}
        className='landingBackground absolute h-screen w-full bg-cover bg-center bg-no-repeat'>
        <SectionDivider fill='white' />
      </motion.div>

      <Nav itemsCount={5} />
      <Divider />
      <motion.div
        className='z-20 '
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
          />
        )}
      </motion.div>
    </section>
  )
}
