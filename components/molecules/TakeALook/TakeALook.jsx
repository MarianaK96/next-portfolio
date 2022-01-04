import React, { useState, useEffect } from "react";
import { Wrapper, ArrowWrapper, Letter, Title } from "./TakeALook.styles.js";
import { ArrowFront } from "common_components/atoms";
import { TakeALookAnims } from "common_components/animations";
import { AnimateTextIn } from "common_components/animations";

const TakeALook = () => {
  const { hidden, displayed, transition, initial } = TakeALookAnims;
  const title = "take a look";

  const parentVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.01,
        staggerChildren: 0.04,
      },
    },
  };

  const letter = {
    hidden: { translateY: 200, opacity: 0 },
    visible: {
      translateY: 0,
      opacity: 1,
      transition: {
        ease: "easeIn",
      },
    },
  };

  return (
    <Wrapper>
      <AnimateTextIn title={`Take a look`} color={`var(--grey)`} />
      <ArrowWrapper
        href="/projects"
        initial={hidden}
        animate={displayed}
        transition={transition}
      >
        <ArrowFront />
      </ArrowWrapper>
    </Wrapper>
  );
};

export default TakeALook;

{
  /* <TitleStyles
  color={color}
  as={motion.h1}
  initial="hidden"
  animate="visible"
  variants={parentVariant}
>
  {title.split("").map((char, index) => {
    return <Letter variants={letter}>{char}</Letter>;
  })}
</TitleStyles>; */
}
