import React, { useState, useEffect } from "react";
import { Wrapper, Sentence, SentenceContainer } from "./AboutText.styles.js";
import { motion } from "framer-motion";

const AboutText = () => {
  const [test, setTest] = useState("hidden");

  useEffect(() => {
    console.log("test: ", test);
  }, [test]);

  const lineOne = "Hey, I'm Mariana, a";
  const lineTwo = " front-end developer";
  const lineThree = "with extended proficiency in devops";
  const lineFour = "and a background in";
  const space = " ";
  const lineFive = " network engineering";

  const sentences = [lineOne, lineTwo, lineThree, lineFour, lineFive];

  const parentVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  const letter = {
    hidden: { translateY: 200, opacity: 0 },
    visible: {
      translateY: 0,
      opacity: 1,
    },
    transition: {
      ease: "ease",
    },
  };

  return (
    <>
      {/* <button
        onClick={() => {
          test === "hidden" ? setTest("visible") : setTest("hidden");
        }}
      >
        set test
      </button> */}
      <Wrapper
        as={motion.div}
        initial="hidden"
        animate="visible"
        variants={parentVariant}
      >
        {/* {sentences.map((item, index) => {
          return <Sentence variants={letter}>{item}</Sentence>;
        })} */}
        <SentenceContainer>
          <Sentence variants={letter} as={motion.div}>
            {lineOne} <span>{lineTwo}</span>
          </Sentence>
          <Sentence variants={letter} as={motion.div}>
            {lineThree}
          </Sentence>
          <Sentence variants={letter} as={motion.div}>
            {lineFour} <span>{lineFive}</span>
          </Sentence>
        </SentenceContainer>
      </Wrapper>
    </>
  );
};

export default AboutText;

//parent variant for the wrapper
//child variant for the lines
//visible y transform
