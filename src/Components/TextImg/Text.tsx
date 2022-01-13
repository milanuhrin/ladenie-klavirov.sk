import { P, H3, Div } from './styles';
import React from 'react';

export const Text = React.forwardRef((props: Props, ref: any) => {
   const { text, title, textColor, gradient, width } = props;
   return (
      <Div width={width} ref={ref}>
         <H3 gradient={gradient}>{title}</H3>
         <P textColor={textColor}>{text}</P>
      </Div>
   );
});
interface Props {
   text: string | React.ReactElement;
   title: string;
   textColor?: string;
   gradient?: string;
   width?: string;
}
