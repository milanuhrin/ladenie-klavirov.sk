import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import React from 'react'
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
         <div className='col-span-1'>
            <FontAwesomeIcon className='' icon={icon} />
         </div>
         <div className='col-start-2'>
            <Link
               onClick={() => toggleOpen && toggleOpen()}
               to={link}
               aria-label={name}>
               {name}
            </Link>
         </div>
      </>
   )
}
