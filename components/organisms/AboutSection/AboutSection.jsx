import React, { useState, useEffect } from "react";
import {
  Wrapper,
  AboutWrapper,
  LookWrapper,
  Container,
} from "./AboutSection.styles.js";
import { AboutText, TakeALook } from "components/molecules";
import GridLayout from "common_components/atoms";

import { motion } from "framer-motion";

const AboutSection = () => {
  const [test, setTest] = useState("hidden");
  useEffect(() => {
    console.log("test: ", test);
  }, [test]);

  const parentVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        staggerChildren: 1,
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
    },
  };
  return (
    <>
      <button
        onClick={() => {
          test === "hidden" ? setTest("visible") : setTest("hidden");
        }}
      >
        set test
      </button>
      <Wrapper
        initial="hidden"
        animate={test}
        variants={parentVariant}
        as={motion.div}
      >
        <AboutWrapper variants={childVariant} as={motion.div}>
          <AboutText />
        </AboutWrapper>
        <LookWrapper variants={childVariant} as={motion.div}>
          <TakeALook />
        </LookWrapper>
      </Wrapper>
    </>
  );
};

export default AboutSection;
