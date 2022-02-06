import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import React from 'react'
import { motion } from 'framer-motion'
import { mobileMenuListItem } from '../../../Utilities/motionVariants'

interface Props {
   link: string
   name?: string
   icon?: any
   toggle: any
}
export const MobileNavItem = (props: Props) => {
   const { link, name, icon, toggle } = props
   return (
      <>
         <motion.div variants={mobileMenuListItem}>
            <FontAwesomeIcon className='' icon={icon} />
         </motion.div>
         <motion.div variants={mobileMenuListItem} className='col-start-2'>
            <Link onClick={toggle} to={link} aria-label={name}>
               {name}
            </Link>
         </motion.div>
      </>
   )
}
