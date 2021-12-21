import React, { useState, useEffect } from "react";
import { Wrapper } from "./TakeALook.styles.js";
import { Arrow } from "common_components/atoms";

const TakeALook = () => {
  return (
    <Wrapper>
      <p>Take a look</p>
      <div>
        <Arrow />
      </div>
    </Wrapper>
  );
};

export default TakeALook;
