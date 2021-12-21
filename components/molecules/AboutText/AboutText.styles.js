import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  ${({ theme }) => theme.text.t2}
  color: var(--brown-sugar);
  font-weight: bold;
  overflow: hidden;
  width: auto;
  height: auto;

  & div {
    display: inline-block;
    overflow: hidden;
    white-space: pre-wrap;
  }
  & span {
    display: inline-block;
  }

  & .highlight {
    color: var(--powder);
    display: inline-block;
  }
`;

export const SentenceContainer = styled(motion.p)`
  margin: 0;
`;

export const Sentence = styled(motion.div)`
  display: inline-block;

  & > span {
    color: var(--forest-green);
  }
`;
