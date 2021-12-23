import * as React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';

export const ReusableComp = ({ img }: any) => {
   return (
      <div>
         child
         <GatsbyImage image={img} alt='a' />
      </div>
   );
};
