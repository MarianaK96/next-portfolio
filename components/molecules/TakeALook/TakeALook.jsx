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
  return (
    <Wrapper>
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
