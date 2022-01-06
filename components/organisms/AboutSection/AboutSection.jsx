import React, { useState, useEffect } from "react";
import {
  Wrapper,
  AboutWrapper,
  LookWrapper,
  Container,
} from "./AboutSection.styles.js";
import { AboutText, TakeALook } from "components/molecules";

const AboutSection = () => {
  return (
    <>
      <Wrapper>
        <AboutWrapper>
          <AboutText />
        </AboutWrapper>
        <LookWrapper>
          <TakeALook />
        </LookWrapper>
      </Wrapper>
    </>
  );
};

export default AboutSection;
