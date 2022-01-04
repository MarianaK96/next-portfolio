import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  width: 100%;
  & > h1 {
    ${({ theme }) => theme.text.t2}
    color: var(--grey);
    margin-left: auto;
    margin-bottom: 1vh;



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

export const Title = styled(motion.h1)`
  overflow: hidden;

  &:hover {
    cursor: pointer;
    & p {
      color: var(--crimson);
    }
  }
`;

export const ArrowWrapper = styled(Link)`
  cursor: pointer;
`;

export const Animate = styled(motion.div)``;

export const Letter = styled(motion.p)`
  display: inline-block;
  ${({ theme }) => theme.text.t2}
  color: var(--grey);
  margin-left: auto;
  margin-bottom: 1vh;
`;
