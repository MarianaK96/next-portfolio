export const fontFamilyNames = {
  poppins: '"Poppins", sans-serif',
  poppinsMedium: '"Poppins Semibold", sans-serif',
  yesevaOne: '"Yeseva One", serif',
};

const { poppins, poppinsMedium, yesevaOne } = fontFamilyNames;

const fontFamilies = `
@font-face {
  font-family: ${poppins};
  src: url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);

  @font-face {
    font-family: ${yesevaOne};
    src: url('/fonts/YesevaOne/yesevaoneregular.woff') format("woff");
    url('/fonts/YesevaOne/yesevaoneregular.woff2') format("woff2");
    font-weight: normal;
  }
`;

export default fontFamilies;
