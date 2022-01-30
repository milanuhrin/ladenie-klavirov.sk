import { motion } from 'framer-motion'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import * as React from 'react'
import { Text as MotionText } from 'Components/TextImg/Text'

export const TextImg = (props: Props) => {
  const {
    containerStyles,
    headerText,
    headerStyle,
    paragraphText,
    paragraphStyle,
    textWrapperStyle,
    img,
    alt,
    reversed,
    imgStyleGatsbyImgTag,
    imgStyle,
    loading = 'lazy',
    id,
    sectionDivider,
  } = props
  const Text = motion(MotionText)

  let width = 0
  if (typeof window !== 'undefined') {
    const { innerWidth } = window
    width = innerWidth
  }
  let dynamicStyle
  if (width) {
    dynamicStyle =
      width > 640 && reversed ? { gridColumn: '1', gridRow: '1' } : {}
  }

  return (
    <motion.section
      id={id}
      className={`${containerStyles} horizontalPadding relative z-20 grid w-full gap-14 sm:grid-cols-2 sm:grid-rows-1 sm:flex-row sm:items-center sm:justify-center sm:gap-24 `}>
      {/* Firtst element Text */}

      <Text
        initial='hidden'
        animate='visible'
        paragraphText={paragraphText}
        paragraphStyle={paragraphStyle}
        headerText={headerText}
        headerStyle={headerStyle}
        textWrapperStyle={textWrapperStyle}
      />

      {/* Second element Img */}
      {img &&
        alt &&
        (typeof img === 'string' ? (
          <motion.img
            className={`${imgStyle}  flex max-w-[30rem] justify-self-center object-cover object-center`}
            style={{ ...dynamicStyle }}
            src={img}
            whileTap={{ scale: 0.55 }}
          />
        ) : (
          dynamicStyle && (
            <GatsbyImage
              style={{ ...dynamicStyle }}
              imgStyle={{}}
              className={`${imgStyle} flex max-w-[30rem]  justify-self-center rounded-2xl  object-cover object-center shadow-2xl `}
              imgClassName={`${imgStyleGatsbyImgTag} shadow-2xl`}
              image={img}
              alt={alt}
              loading={loading}
            />
          )
        ))}
      {sectionDivider}
    </motion.section>
  )
}

interface Props {
  // Native
  containerStyles?: string
  reversed?: boolean
  loading?: 'lazy' | 'eager'
  id?: string
  sectionDivider?: React.ReactElement
  // Text Comp
  headerText?: string | React.ReactElement
  headerStyle?: string
  paragraphText?: string | React.ReactElement
  paragraphStyle?: string
  textWrapperStyle?: string
  // Image Comp
  img?: IGatsbyImageData | string
  alt?: string
  imgStyle?: string
  imgStyleGatsbyImgTag?: string
}
