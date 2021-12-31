import React from "react";
import {
  Wrapper,
  AboutWrapper,
  LookWrapper,
  Container,
} from "./AboutSection.styles.js";
import { AboutText, TakeALook } from "components/molecules";
import GridLayout from "common_components/atoms";

const AboutSection = () => {
  return (
    <Wrapper>
      <AboutWrapper>
        <AboutText />
      </AboutWrapper>
      <LookWrapper>
        <TakeALook />
      </LookWrapper>
    </Wrapper>
  );
};

export default AboutSection;
