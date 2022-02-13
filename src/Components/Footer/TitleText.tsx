import React from 'react';

export const TitleText = ({
  h1Styles,
  children,
}: {
  h1Styles?: string;
  children: React.ReactNode;
}) => {
  return (
    <h1
      className={`${h1Styles} from-snakeGr1 to-snakeGr2 bg-gradient-to-r bg-clip-text text-3xl font-extrabold text-transparent`}
    >
      {children}
    </h1>
  );
};
