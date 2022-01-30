import { motion, useCycle } from 'framer-motion'
import { Link } from 'gatsby'
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image'
import React, { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { MenuToggle } from 'Components/Menu/MenuToggle'
import { appear } from 'Components/Landing'
import { MenuItem } from 'Components/MenuItem'
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 254px 35px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(1px at 254px 35px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}
const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { y: -70 },
  show: { y: 0 },
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const itemIds = [
  {
    name: 'Skúsenosti',
    link: '#experience',
  },
  {
    name: 'O mne',
    link: '#aboutMe',
  },
  {
    name: 'Kontakt',
    link: '#contact',
  },
  {
    name: 'Vzdelanie',
    link: '#education',
  },
]

export const Nav = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const ref = useRef(null)
  const handleClickOutside = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  useOnClickOutside(ref, handleClickOutside)
  const [isOpen, toggleOpen] = useCycle(false, true)
  return (
    <>
      <motion.div className='relative z-30 flex w-full items-center bg-[#1f1f1f] sm:max-w-full sm:justify-center sm:py-8 lg:space-x-16'>
        <motion.ul
          initial={'hidden'}
          animate={'show'}
          variants={container}
          className='z-20 hidden items-center sm:flex sm:space-x-8'>
          <motion.li className='text-silver' variants={item}>
            <Link to='#experience' aria-label='Skúsenosti'>
              Skúsenosti
            </Link>
          </motion.li>
          <motion.li className='text-silver' variants={item}>
            <Link to='#aboutMe' aria-label='O mne'>
              O mne
            </Link>
          </motion.li>
          <motion.li className='text-silver' variants={item}>
            <Link aria-label='logo' to='/'>
              <StaticImage
                src='../images/logo-white.png'
                alt='logo'
                className='w-20'
                placeholder='none'
              />
            </Link>
          </motion.li>
          <motion.li className='text-silver' variants={item}>
            <Link to='#contact' aria-label='Kontakt'>
              Kontakt
            </Link>
          </motion.li>
          <motion.li className='text-silver' variants={item}>
            <Link aria-label='Vzdelanie' to='#education'>
              Vzdelanie
            </Link>
          </motion.li>
        </motion.ul>

        <motion.div
          className='relative flex w-full items-center justify-between py-3 px-6 sm:hidden'
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={appear()}>
          <motion.div
            className={
              'absolute inset-y-0 right-0 z-[20] flex h-[1000px] w-[300px] justify-center bg-lightBlack'
            }
            variants={sidebar}>
            <motion.ul
              className='absolute top-[7rem] z-50 ml-11 flex flex-col'
              variants={variants}>
              {itemIds.map((item, i) => (
                <MenuItem
                  i={i}
                  key={i}
                  text={item.name}
                  link={item.link}
                  toggleOpen={toggleOpen}
                />
              ))}
            </motion.ul>
          </motion.div>
          <StaticImage
            src='../images/logo-darkGrey.png'
            alt='logo'
            className='relative w-20'
            placeholder='none'
          />

          <MenuToggle toggle={() => toggleOpen()} />

          {/* <button
                  aria-label='Open Menu'
                  title='Open Menu'
                  className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                  onClick={() => setIsMenuOpen(true)}>
                  <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                     <path
                        fill='currentColor'
                        d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                     />
                     <path
                        fill='currentColor'
                        d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                     />
                     <path
                        fill='currentColor'
                        d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                     />
                  </svg>
               </button>

               <AnimatePresence>
                  {isMenuOpen && (
                     <motion.div
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className=' p-5 flex flex-col rounded-bl-xl rounded shadow-sm absolute top-0 right-0 z-40 w-1/2 bg-gradient-to-r via-[#ffd2b8] from-[#ffeac2] to-[#feac7c] '>
                        <button
                           title='Close Menu'
                           className=' self-end p-2 mt-1.5 mr-2.5 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                           onClick={() => setIsMenuOpen(false)}>
                           <svg
                              className='w-5 text-gray-600'
                              viewBox='0 0 24 24'>
                              <path
                                 fill='currentColor'
                                 d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                              />
                           </svg>
                        </button>
                        <nav>
                           <ul className='space-y-4'>
                              <Li>
                                 <Link
                                    to='#experience'
                                    onClick={() => setIsMenuOpen(false)}
                                    aria-label='Skúsenosti'>
                                    Skúsenosti
                                 </Link>
                              </Li>
                              <Li>
                                 <Link
                                    to='#aboutMe'
                                    onClick={() => setIsMenuOpen(false)}
                                    aria-label='O mne'>
                                    O mne
                                 </Link>
                              </Li>
                              <Li>
                                 <Link
                                    to='#contact'
                                    onClick={() => setIsMenuOpen(false)}
                                    aria-label='Kontakt'>
                                    Kontakt
                                 </Link>
                              </Li>
                              <Li>
                                 <Link
                                    to='#education'
                                    onClick={() => setIsMenuOpen(false)}
                                    aria-label='Vzdelanie'>
                                    Vzdelanie
                                 </Link>
                              </Li>
                           </ul>
                        </nav>
                     </motion.div>
                  )}
               </AnimatePresence> */}
        </motion.div>
      </motion.div>
    </>
  )
}

interface Props {
  logo?: IGatsbyImageData
  itemsCount?: number
  items?: { [key: string]: string }
}
