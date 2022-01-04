import React, { useState, useEffect } from "react";
import { Wrapper, ArrowWrapper, Animate } from "./TakeALook.styles.js";
import { ArrowFront } from "common_components/atoms";
import { AnimateTextIn } from "common_components/animations";

const TakeALook = () => {
  const variant = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -700, opacity: 0 },
    transition: {
      ease: "easeIn",
      duration: 5,
    },
  };
  const [test, setTest] = useState("hidden");
  return (
    <Wrapper>
      <AnimateTextIn title={`Take a look`} color={`var(--grey)`} />
      <ArrowWrapper href="/projects">
        <Animate
          initial="hidden"
          animate="visible"
          variants={variant}
          transition="transition"
        >
          <ArrowFront />
        </Animate>
      </ArrowWrapper>
    </Wrapper>
  );
};

export default TakeALook;
