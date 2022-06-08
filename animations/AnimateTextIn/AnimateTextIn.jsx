import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TitleStyles, Letter, Word } from "./AnimateTextIn.styles";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import { v4 as uuidv4 } from "uuid";

const AnimateTextIn = ({ title, color }) => {
  const [test, setTest] = useState("hidden");

  const ref = useRef();
  const isVisible = useIntersectionObserver(ref);

  useEffect(() => {
    isVisible && setTest("visible");
  }, [isVisible]);

  const parentVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.032,
        duration: 0.35,
      },
    },
  };

  const letter = {
    hidden: { translateY: 25, opacity: 0 },
    visible: {
      translateY: 0,
      opacity: 1,
      transition: {
        duration: 0.45,
      },
    },
    transition: {
      ease: "easeInOut",
    },
  };

  return (
    <>
      <div ref={ref}></div>
      <TitleStyles
        color={color}
        initial="hidden"
        animate="visible"
        variants={parentVariant}
      >
        {title.split(" ").map((word, index) => (
          <Word>
            {word.split("").map((char, index) => {
              return <Letter variants={letter}>{char}</Letter>;
            })}
            {index !== title.split(" ").length && <>&nbsp;</>}
          </Word>
        ))}
      </TitleStyles>
    </>
  );
};

export default AnimateTextIn;
