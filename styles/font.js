// import "/fonts/Poppins/poppinsregular.woff";
// import "/fonts/Poppins/poppinsregular.woff2";
// import "/fonts/Poppins/Poppins-Medium.woff";
// import "/fonts/Poppins/Poppins-Medium.woff2";
// import "/fonts/YesevaOne/yesevaoneregular.woff";
// import "/fonts/YesevaOne/yesevaoneregular.woff2";

export const fontFamilyNames = {
  Poppins: '"Poppins", sans-serif',
  PoppinsMedium: '"Poppins", sans-serif',
  yesevaOne: '"Yeseva One", serif',
};

const { Poppins, PoppinsMedium, yesevaOne } = fontFamilyNames;

const fontFamilies = `
  @font-face {
    font-family: ${Poppins};
    src: url('/fonts/Poppins/poppinsregular.woff') format("woff");
    url('/fonts/Poppins/poppinsregular.woff2') format("woff2");
    font-weight: normal;
  },
  @font-face {
    font-family: ${PoppinsMedium};
    src: url('/fonts/Poppins/Poppins-Medium.woff') format("woff");
    url('/fonts/Poppins/Poppins-Medium.woff2') format("woff2");
    font-weight: 500;
  }
  @font-face {
    font-family: ${yesevaOne};
    src: url('/fonts/YesevaOne/yesevaoneregular.woff') format("woff");
    url('/fonts/YesevaOne/yesevaoneregular.woff2') format("woff2");
    font-weight: normal;
  }
`;

export default fontFamilies;
