export const fontFamilyNames = {
  Poppins: '"Poppins", sans-serif',
  yesevaOne: '"Yeseva One"',
};

const { Poppins, yesevaOne } = fontFamilyNames;

const fontFamilies = `
  @font-face {
    font-family: ${Poppins};
    src: url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
  }
  @font-face {
    font-family: ${yesevaOne};
    src: url(https://fonts.googleapis.com/css?family=Fuzzy+Bubbles:regular,700);
  }
`;

export default fontFamilies;
