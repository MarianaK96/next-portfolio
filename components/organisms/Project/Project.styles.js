import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  grid-column: 2 / span 6;
  grid-row: 2 / -1;

  display: inline-block;

  ${({ theme }) => theme.mq.atDesktop`
  grid-row: 3 / -1;
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LinkWrapper = styled.a`
  align-self: center;
  margin-top: 0.5rem;
  display: inline-block;
  margin-left: 0;

  ${({ theme }) => theme.text.bxs}
  font-weight: bold;
  color: #1b43ef;
  text-align: left;

  ${({ theme }) => theme.mq.atTablet`
    margin-left: 60px;
`}
`;

export const ArrowWrapper = styled(Link)`
  & > svg {
    cursor: pointer;
  }
`;
