import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Wrapper,
  ArrowWrapper,
  Animate,
  TextWrapper,
} from "./TakeALook.styles.js";
import { Arrow } from "common_components/atoms";
import { AnimateTextIn } from "animations";

import { motion } from "framer-motion";

const TakeALook = () => {
  const [test, setTest] = useState("hidden");

  // const parentVariant = {
  //   hidden: { opacity: 1 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       delayChildren: 3,
  //       staggerChildren: 3,
  //     },
  //   },
  // };

  // const childVariant = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //   },
  // };

  return (
    <Wrapper>
      {/* <button
        onClick={() => {
          test === "hidden" ? setTest("visible") : setTest("hidden");
        }}
      >
        set test
      </button> */}

      <Link href="/projects">
        <TextWrapper>
          <AnimateTextIn title={`Take a look`} color={`var(--grey)`} />
        </TextWrapper>
      </Link>

      <ArrowWrapper href="/projects">
        <Animate
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ delay: 1, ease: "easeInOut" }}
        >
          <Arrow />
        </Animate>
      </ArrowWrapper>
    </Wrapper>
  );
};

export default TakeALook;
