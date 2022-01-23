import React from 'react';

const Img = () => {
   return (
      <>
         {typeof img === 'string' ? (
            <motion.img
               className={`${imgMaxWidth}  flex object-cover object-center justify-self-center`}
               style={{ ...dynamicStyle }}
               src={img}
               whileTap={{ scale: 0.55 }}
            />
         ) : (
            dynamicStyle && (
               <motion.div
                  whileTap={{ scale: 0.95 }}
                  className='justify-self-center'>
                  <GatsbyImage
                     style={{ ...dynamicStyle }}
                     imgStyle={{}}
                     className={`${imgMaxWidth} ${borderRadius} shadow-2xl  flex object-cover object-center `}
                     imgClassName={`shadow-2xl  ${borderRadius} `}
                     image={img}
                     alt={alt}
                     loading={loading}
                  />
               </motion.div>
            )
         )}
      </>
   );
};
