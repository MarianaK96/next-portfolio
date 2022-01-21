import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

export const Wrapper = styled(motion.div)`
  grid-column: 2 / 9;
  grid-row: 3 / -1;
  overflow: hidden;

  ${({ theme }) => theme.mq.atDesktop`
  grid-row: 3 / -1;
  `}
`;

export const Container = styled.div`
  & > h1 {
    ${({ theme }) => theme.text.t1}
    color: var(--grey);
    cursor: pointer;
    margin: 0;

    &:hover {
      color: var(--crimson);
    }
  }

  ${({ theme }) => theme.mq.atTablet`
  margin-right: 5rem;
  `}
`;
