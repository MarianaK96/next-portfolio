import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  ${({ theme }) => theme.text.t2}
  color: var(--grey);
  font-weight: bold;
  overflow: hidden;
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 0;

  & div {
    display: inline-block;
    overflow: hidden;
    white-space: pre-wrap;
  }
  & span {
    display: inline-block;
  }

  ${({ theme }) => theme.mq.atTablet`
  width: auto;
  `}
`;

export const SentenceContainer = styled(motion.p)`
  margin: 0;
`;

export const Sentence = styled(motion.div)`
  display: inline-block;

  & > span {
    color: var(--crimson);
  }
`;
