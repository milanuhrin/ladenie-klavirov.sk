import { DesktopNav } from 'Components/Navigation/Desktop/DesktopNav'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { appear } from 'Utilities/motionVariants'
import { MobileNav } from './Mobile/MobileNav'

export const Navigation = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const ref = useRef(null)
   const handleClickOutside = () => isMenuOpen && setIsMenuOpen(false)
   useOnClickOutside(ref, handleClickOutside)
   const { scrollYProgress } = useViewportScroll()
   const backgroundColorTransition = useTransform(
      scrollYProgress,
      [0, 0.25],
      ['#1f1f1f', '#1f1f1fdd'],
   )
   const paddingTransition = useTransform(
      scrollYProgress,
      [0, 0.25],
      ['7rem', '5rem'],
   )
   return (
      <>
         {/* Height fix die to fixed navigation */}
         <div className='h-[1.25rem] sm:h-[85px] w-full'>
            {/* Fixed nav */}
            <motion.div
               ref={ref}
               style={{
                  backgroundColor: backgroundColorTransition,
               }}
               className={`fixed top-0 z-30 flex w-full items-center sm:justify-end sm:py-[1rem] lg:space-x-16`}
               initial={['hidden', 'initialColor']}
               animate={['visible', 'finalColor']}
               variants={appear('backOut')}>
               <DesktopNav paddingTransition={paddingTransition} />
               <MobileNav
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
               />
            </motion.div>
         </div>
      </>
   )
}
