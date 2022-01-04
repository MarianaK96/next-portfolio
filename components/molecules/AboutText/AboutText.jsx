import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Sentence,
  SentenceContainer,
  Styles,
} from "./AboutText.styles.js";
import { motion } from "framer-motion";
import { AnimateTextIn } from "common_components/animations";

const AboutText = () => {
  const lineOne = "Hey, I'm Mariana, a";
  const lineTwo = "front-end developer";
  const lineThree = "with experience in Javascript";
  const lineFour = "and a background in";
  const lineFive = "user research";

  return (
    <>
      <Styles>
        <AnimateTextIn title={lineOne} color={`var(--grey)`} />
        <AnimateTextIn title={lineTwo} color={`var(--crimson)`} />
        <AnimateTextIn title={lineThree} color={`var(--grey)`} />
        <AnimateTextIn title={lineFour} color={`var(--grey)`} />
        <AnimateTextIn title={lineFive} color={`var(--crimson)`} />
      </Styles>
    </>
  );
};

export default AboutText;
