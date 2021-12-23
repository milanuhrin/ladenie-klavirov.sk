import { P, H3, Div } from './styles';

export const HeroText = ({
   text,
   title,
   textColor,
}: {
   text: string;
   title: string;
   textColor?: string;
}) => {
   return (
      <Div>
         <H3>{title}</H3>
         <P textColor={textColor}>{text}</P>
      </Div>
   );
};
