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
   appear,
   container,
   desktopMenuItems,
   mobileMenuItems,
   sidebarVariants,
} from 'Utilities/motionVariants'
import { v4 as uuidv4 } from 'uuid'
import { NavItem } from './NavItem'
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
               data-name='Main Mobile Nav container'
               className='relative flex w-full items-center justify-between py-3 px-6 sm:hidden'
               initial={false}
               animate={isOpen ? 'open' : 'closed'}>
               <StaticImage
                  data-name='Logo'
                  src='../images/logo-darkGrey.png'
                  alt='logo'
                  className='relative w-20'
                  placeholder='none'
               />
               <MenuToggle data-name='Menu Icon' toggle={() => toggleOpen()} />
               {/* Sidebard bg */}
               <motion.div
                  data-name='Sidebar container bg'
                  className={
                     'absolute inset-y-0 text-gmailSilverText right-0 z-[20] flex h-[1000px] w-[250px] items-start bg-gradient-to-r from-[#383838] to-gmailLightBlack'
                  }
                  variants={sidebarVariants}>
                  <motion.div
                     data-name='GRID'
                     className=' ml-[2rem] grid grid-cols-1  gap-x-[1rem] gap-y-[2rem] absolute top-[5.5rem]   z-50 '
                     variants={mobileMenuItems}>
                     <motion.div
                        data-name='title'
                        className='mb-[1rem] col-start-2 text-lg w-full font-sans top-[5rem]'>
                        Milan Uhrin
                     </motion.div>
                     {menuItems.map(({ link, name, icon }, i) => (
                        <NavItem
                           link={link}
                           name={name}
                           icon={icon}
                           key={uuidv4()}
                        />
                     ))}
                  </motion.div>
                  <motion.div
                     data-name='line divider'
                     className='absolute border-b-[1px] border-gmailGreyText  top-[6rem] h-[2rem] w-full'
                  />
               </motion.div>
            </motion.div>
         </motion.div>
      </>
   )
}
