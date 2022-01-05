import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Wrapper, ArrowWrapper, Animate } from "./TakeALook.styles.js";
import { Arrow } from "common_components/atoms";
import { AnimateTextIn } from "animations";

const TakeALook = () => {
  const variant = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -200, opacity: 0 },
    transition: {
      ease: "easeInOut",
      delay: 3,
      duration: 3,
    },
  };
  const [test, setTest] = useState("hidden");
  return (
    <Wrapper>
      <button
        onClick={() => {
          test === "hidden" ? setTest("visible") : setTest("hidden");
        }}
      >
        set test
      </button>
      <Link href="/projects">
        <AnimateTextIn title={`Take a look`} color={`var(--grey)`} />
      </Link>

      <ArrowWrapper href="/projects">
        <Animate
          initial="hidden"
          animate={test}
          variants={variant}
          transition="transition"
        >
          <Arrow />
        </Animate>
      </ArrowWrapper>
    </Wrapper>
  );
};

export default TakeALook;
