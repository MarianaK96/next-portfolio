import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  width: 100%;

  & > div {
    margin-left: auto;
  }

  & > svg {
    transform: scale(0.7);

    ${({ theme }) => theme.mq.atTablet`
    transform: scale(1);
    `}
  }
`;

export const TextWrapper = styled.div`
  & > h1 {
    ${({ theme }) => theme.text.t1}
    color: var(--grey);
    margin-left: auto;
    margin-bottom: 1vh;

    &:hover {
      cursor: pointer;
      color: var(--crimson);
    }
`;

export const Container = styled.div`
  overflow: hidden;
`;

export const ArrowWrapper = styled(Link)`
  cursor: pointer;
`;

export const Animate = styled(motion.div)``;
