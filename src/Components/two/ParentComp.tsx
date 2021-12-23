import * as React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { ReusableComp } from './ReusableComp';

export const ParentComp = () => {
   const data = useStaticQuery(graphql`
      {
         file(relativePath: { eq: "free-time.jpg" }) {
            childImageSharp {
               gatsbyImageData
            }
         }
      }
   `);
   console.log('wat', data); // is null
   const img = getImage(data.file);
   console.log('HA', img); // is null

   return (
      <div>
         parent as
         <ReusableComp img={img} />
      </div>
   );
};
