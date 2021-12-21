import React from "react";
import {
  Wrapper,
  AboutWrapper,
  LookWrapper,
  Container,
} from "./AboutSection.styles.js";
import { AboutText, TakeALook } from "components/molecules";

const AboutSection = () => {
  return (
    <Wrapper>
      <AboutWrapper>
        <AboutText />
        <LookWrapper>
          <TakeALook />
        </LookWrapper>
      </AboutWrapper>
    </Wrapper>
  );
};

export default AboutSection;
