import { SectionDivider } from './export'
import { cardVariants } from './AnimOnScroll'
import { motion } from 'framer-motion'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Text as MotionText } from './TextImg/Text'
import { appear } from './Landing'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import '../../global.css'
import { SectionDividerWaveOneSide } from '../svg/SectionDividerWaveOneSide'
import { SectionDividerSharp } from '../svg/SectionDividerSharp'

const Text = motion(MotionText)
const pole = [
  'Hudobné školy',
  'Profesionálni hudobníci',
  'Rekreační amatéri',
  'Oprava mechaniky',
]
const ha = [
  {
    alt: '2',
    class: ' object-contain col-span-6 w-[100%]   self-end ',
  },
  {
    alt: '2',
    class: ' w-[80%]    self-end col-span-6 ',
  },
  {
    alt: '2',
    class: ' w-[75%] justify-self-end  col-span-5',
  },
  {
    alt: '2',
    class: 'w-[90%]   col-span-6',
  },
]
export const Hero2 = (props: Props) => {
  const { containerStyles } = props
  const { img1, img2, img3, img4, textWidth = '100%' } = props
  const images = [img1, img2, img3, img4]

  return (
    <motion.section
      id='experience'
      className={`${containerStyles} horizontalPadding relative flex max-w-full flex-col gap-10 bg-gradient-to-b from-white to-silver px-8  sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:items-center sm:justify-center sm:gap-8 sm:px-6 lg:px-20`}>
      {/* <SectionDivider /> */}

      <motion.div
        id='textWrapper'
        className='z-10 flex flex-col gap-6 sm:col-start-2 sm:row-start-1  sm:self-center sm:justify-self-center'
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ margin: '400px', once: true }}
        variants={cardVariants}>
        <Text
          initial='hidden'
          animate='visible'
          variants={appear()}
          headerText='Skúsenosti'
          paragraphText='Oblasť môjho pôsobenia je najmä západné a stredné slovensko, kde
               ladím a zastrešujem väčšinu hudobných škôl a domácností, ktoré sa
               rozhodli zavolať odborníka.'
        />
        <ul
          className={`${textWidth} flex flex-col gap-6 self-center justify-self-center  sm:grid sm:grid-cols-2`}>
          {pole.map((name) => (
            <motion.li className='flex lg:mt-0' key={uuidv4()}>
              <motion.span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-800'>
                <svg
                  className='h-4 w-4'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'></path>
                </svg>
              </motion.span>
              <motion.span className='ml-4 text-base font-medium leading-6 text-gray-500'>
                {name}
              </motion.span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        id='imageWrapper'
        className='z-10 grid max-h-[35rem] max-w-[35rem] grid-cols-12 grid-rows-2 gap-4 justify-self-center sm:col-start-1 sm:row-start-1'>
        {ha.map((item, index) => (
          <motion.div
            key={uuidv4()}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ margin: '60px', once: true }}
            whileHover={{ scale: 1.08 }}
            variants={{
              ...cardVariants,
              offscreen: {
                y: 150,
              },
            }}
            className={`z-20 h-auto w-auto rounded-lg object-cover ${item.class}`}>
            <GatsbyImage
              imgClassName={
                'rounded-lg w-auto max-w-[35rem] max-h-[35rem] object-cover '
              }
              className={
                'max-h-[35rem] w-auto max-w-[35rem] rounded-lg shadow-xl'
              }
              image={images[index]}
              alt='as'
            />
          </motion.div>
        ))}
      </motion.div>
      {/* <SectionDivider /> */}
      {/* <SectionDividerWaveOneSide /> */}
      <SectionDividerSharp />
    </motion.section>
  )
}

interface Props {
  img1: IGatsbyImageData
  img2: IGatsbyImageData
  img3: IGatsbyImageData
  img4: IGatsbyImageData
  textWidth?: string
  containerStyles?: string
}
