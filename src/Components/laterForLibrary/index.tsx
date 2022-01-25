import React from 'react';

const As = () => <div>as</div>;

// nevymazat! priklad toho jak sa robi prepouzitelny styled comp s tw
// export const P = styled(motion.p)(
//    ({ textColor, gradient }: { textColor?: string; gradient?: string }) => [
//       `color: ${textColor};`,
//       gradient &&
//          `background: ${gradient};
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;`,
//       tw`text-xl`,
//    ]
// );

// export const H3 = styled(motion.h3)(({ gradient }: { gradient?: string }) => [
//    tw`self-center text-4xl font-extrabold`,
//    gradient &&
//       `background: ${gradient};
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;`,
//    // NEVYMAZAT -> format of code for gradiet:  '-webkit-linear-gradient(#eee, #333)'
// ]);
