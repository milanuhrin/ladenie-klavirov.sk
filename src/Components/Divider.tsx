import React from 'react'

export const Divider = ({ styles }: { styles?: string }) => {
  let a = 2
  return (
    <div
      id='divider'
      className={`${styles} h-[2.5rem] w-full sm:h-[7rem] lg:h-[9rem]`}
    />
  )
}
