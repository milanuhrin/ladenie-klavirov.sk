import { P, H3, Div } from './styles';
import React from 'react';

export const Text = React.forwardRef((props: Props, ref: any) => {
   const { text, title, textColor } = props;
   return (
      <Div ref={ref}>
         <H3>{title}</H3>
         <P textColor={textColor}>{text}</P>
      </Div>
   );
});
interface Props {
   text: string | React.ReactElement;
   title: string;
   textColor?: string;
}
