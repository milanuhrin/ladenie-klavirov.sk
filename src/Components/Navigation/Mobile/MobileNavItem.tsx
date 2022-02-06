import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import React from 'react'
import { motion } from 'framer-motion'
import { mobileMenuListItem } from '../../../Utilities/motionVariants'

interface Props {
   toggleOpen?: () => void
   link: string
   name?: string
   icon?: any
}
export const NavItem = (props: Props) => {
   const { toggleOpen, link, name, icon } = props
   return (
      <>
         <motion.div variants={mobileMenuListItem}>
            <FontAwesomeIcon className='' icon={icon} />
         </motion.div>
         <motion.div variants={mobileMenuListItem} className='col-start-2'>
            <Link
               onClick={() => toggleOpen && toggleOpen()}
               to={link}
               aria-label={name}>
               {name}
            </Link>
         </motion.div>
      </>
   )
}
