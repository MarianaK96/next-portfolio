export const fontFamilyNames = {
  Poppins: '"Poppins", sans-serif',
  PoppinsMedium: '"Poppins", sans-serif',
  yesevaOne: '"Yeseva One", serif',
};

const { Poppins, PoppinsMedium, yesevaOne } = fontFamilyNames;

const fontFamilies = `
  @font-face {
    font-family: ${Poppins};
    src: url('/fonts/Poppins/Poppins-Regular.woff')format("woff");
    url('/fonts/Poppins/Poppins-Regular.woff2')format("woff2");
    font-weight: normal;
  },
  @font-face {
    font-family: ${PoppinsMedium};
    src: url('/fonts/Poppins/Poppins-Medium.woff')format("woff");
    url('/fonts/Poppins/Poppins-Medium.woff2')format("woff2");
    font-weight: 500;
  }
  @font-face {
    font-family: ${yesevaOne};
    src: url('/fonts/YesevaOne/YesevaOne-Regular.woff')format("woff");
    url('/fonts/YesevaOne/YesevaOne-Regular.woff2')format("woff2");
    font-weight: normal;
  }
`;

export default fontFamilies;
