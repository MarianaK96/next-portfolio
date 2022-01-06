import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  height: 100vh;

  ${({ theme }) => theme.mq.atDesktop`
  grid-template-columns: repeat(12, 1fr);
  `}
`;

export const AboutWrapper = styled.div`
  grid-column: 2 / span 8;
  height: 100%;
  margin-top: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => theme.mq.atTablet`
    grid-column: 2 / 9;
    margin-top: 10rem;
    align-items: flex-start;
  `}

  ${({ theme }) => theme.mq.atDesktop`
    grid-column: 2 / 13;
    margin-top: 10rem;
    align-items: flex-start;
`}
`;

export const LookWrapper = styled.div`
  grid-column: 2 / span 4;

  ${({ theme }) => theme.mq.atTablet`
    margin-top: 5rem;
    margin-bottom: 4rem;
`};
`;
