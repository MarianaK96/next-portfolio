import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  width: 100%;
  & > p {
    ${({ theme }) => theme.text.t2}
    color: var(--grey);
    margin-left: auto;
    margin-bottom: 1vh;

    &:hover {
      color: var(--crimson)
      cursor: pointer;
    }
  }

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

export const ArrowWrapper = styled(Link)`
  cursor: pointer;
`;
