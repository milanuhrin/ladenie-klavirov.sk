import React from 'react'
interface Props {
   paragraphText?: string | React.ReactElement
   paragraphStyle?: string
   headerText?: string | React.ReactElement
   headerStyle?: string
   textWrapperStyle?: string
}

export const Text = React.forwardRef((props: Props, ref: any) => {
   const {
      paragraphText,
      paragraphStyle,
      headerText,
      headerStyle,
      textWrapperStyle,
   } = props

   return (
      <div
         id='textWrapper'
         className={`${textWrapperStyle} z-10  w-full flex-col  gap-2o5 self-center flex justify-self-center text-center sm:w-[100%]`}
         ref={ref}>
         {headerText && (
            <h3 className={`${headerStyle} `}>
               <div
                  className={
                     'bg-gradient-to-r from-snakeGr1 to-snakeGr2 bg-clip-text text-center text-4xl font-extrabold text-transparent'
                  }>
                  {headerText}
               </div>
            </h3>
         )}
         {paragraphText && (
            <p className={`${paragraphStyle} black  text-xl  `}>
               {paragraphText}
            </p>
         )}
      </div>
   )
})
