import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Sentence,
  SentenceContainer,
  Styles,
  Underline,
  Container,
} from "./AboutText.styles.js";
import { motion } from "framer-motion";
import { AnimateTextIn } from "animations";
import Link from "next/link";

const AboutText = () => {
  const [shownStatus, setShownStatus] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShownStatus(true);
    }, 1000);
  }, []);

  const lineOne = "Hey, I'm Mariana, a";
  const lineTwo = "front-end developer";
  const lineThree = "with experience in Javascript";
  const lineFour = "and a background in";
  const lineFive = "user research";

  return (
    <>
      <Styles>
        <AnimateTextIn title={lineOne} color={`var(--grey)`} />
        <Container>
          <Link href="/skills">
            <Container>
              <AnimateTextIn title={lineTwo} color={`var(--crimson)`} />
            </Container>
          </Link>
          <Underline
            shownStatus={shownStatus}
            // initial={{ y: 200 }}
            // animate={{ y: 0 }}
            // transition={{ delay: 2, ease: "easeInOut" }}
          />
        </Container>

        <AnimateTextIn title={lineThree} color={`var(--grey)`} />
        <AnimateTextIn title={lineFour} color={`var(--grey)`} />
        <AnimateTextIn title={lineFive} color={`var(--crimson)`} />
      </Styles>
    </>
  );
};

export default AboutText;

//underline to appear when mouse is moved on page? or after a certain number of minutes
