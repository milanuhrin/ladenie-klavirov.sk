import { MenuToggle } from 'Components/Menu/MenuToggle'
import {
  motion,
  useCycle,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import { Link } from 'gatsby'
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image'
import React, { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { menuItems } from 'Utilities/Data'
import {
  sidebarVariants,
  mobileMenuItems,
  desktopMenuItems,
  container,
  mobileMenuListItem,
  appear,
} from 'Utilities/motionVariants'
import { v4 as uuidv4 } from 'uuid'
interface Props {
  logo?: IGatsbyImageData
  itemsCount?: number
  items?: { [key: string]: string }
}

export const Nav = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const ref = useRef(null)
  const handleClickOutside = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  useOnClickOutside(ref, handleClickOutside)
  const [isOpen, toggleOpen] = useCycle(false, true)
  const { scrollYProgress } = useViewportScroll()
  const bg = useTransform(scrollYProgress, [0, 0.25], ['#1f1f1f', '#1f1f1fdd'])
  const pa = useTransform(scrollYProgress, [0, 0.25], ['7rem', '5rem'])

  return (
    <>
      <motion.div
        style={{
          backgroundColor: bg,
        }}
        className={`fixed top-0 z-30 flex w-full items-center sm:w-full sm:justify-end sm:py-[1rem] lg:space-x-16`}
        initial={['hidden', 'initialColor']}
        animate={['visible', 'finalColor']}
        variants={appear('backOut')}>
        <motion.ul
          initial={'hidden'}
          animate={'show'}
          variants={container}
          className='padding-X-2-18rem lg:px-[20rem]  w-full sm:justify-end z-20 hidden items-center sm:flex sm:space-x-8'>
          <motion.li
            className='text-silver mr-auto w-[7rem]'
            variants={desktopMenuItems}
            style={{
              width: pa,
            }}>
            <Link aria-label='logo' to='/'>
              <StaticImage
                src='../images/logo-white.png'
                alt='logo'
                placeholder='none'
              />
            </Link>
          </motion.li>

          {menuItems.map((item, i) => (
            <motion.li
              className='text-silver'
              variants={desktopMenuItems}
              key={uuidv4()}>
              <Link to={item.link} aria-label={item.name}>
                {item.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile nav */}
        <motion.div
          className='relative flex w-full items-center justify-between py-3 px-6 sm:hidden'
          initial={false}
          animate={isOpen ? 'open' : 'closed'}>
          <StaticImage
            src='../images/logo-darkGrey.png'
            alt='logo'
            className='relative w-20'
            placeholder='none'
          />
          <MenuToggle toggle={() => toggleOpen()} />
          {/* Sidebard bg */}
          <motion.div
            className={
              'absolute inset-y-0 right-0 z-[20] flex h-[1000px] w-[300px] justify-center bg-lightBlack'
            }
            variants={sidebarVariants}>
            <motion.ul
              className='absolute top-[7rem] z-50 ml-11 flex flex-col'
              variants={mobileMenuItems}>
              {menuItems.map(({ link, name }) => (
                <motion.li
                  key={uuidv4()}
                  className='my-[1rem] font-bold text-mediumSilver'
                  variants={mobileMenuListItem}
                  whileTap={{ scale: 0.8 }}>
                  <Link
                    onClick={() => toggleOpen()}
                    className='flex w-[12rem] h-[2rem]'
                    to={link}
                    aria-label={name}>
                    {name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}
