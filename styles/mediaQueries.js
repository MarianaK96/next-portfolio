import { css } from "styled-components";

const standardMediaQueries = {
  atTablet: 768,
  atDesktop: 1100,
  atWidescreen: 1920,
};

const customMediaQueries = {
  c1600: 1600,
};

const mediaQueryBreakPoints = {
  ...standardMediaQueries,
  ...customMediaQueries,
};

const mediaQueries = Object.keys(mediaQueryBreakPoints).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    const emSize = mediaQueryBreakPoints[label] / 16;
    accumulator[label] = (...args) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

export default mediaQueries;

//reduces the object into a single value of a string media query
//for each item, take an em size
//accumulator?
//label is the keys, so at each of them create a new string
//what is the css imported from styled components?
