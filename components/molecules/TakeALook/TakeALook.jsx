import React, { useState, useEffect } from "react";
import { Wrapper, ArrowWrapper } from "./TakeALook.styles.js";
import { ArrowFront } from "common_components/atoms";

const TakeALook = () => {
  return (
    <Wrapper>
      <p>Take a look</p>
      <ArrowWrapper href="/projects">
        <ArrowFront />
      </ArrowWrapper>
    </Wrapper>
  );
};

export default TakeALook;
