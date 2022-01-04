import styled from "styled-components";
import { motion } from "framer-motion";

export const Styles = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  & > h1 {
    ${({ theme }) => theme.text.t2}
  }
`;

export const Wrapper = styled.div`
  color: var(--grey);
  font-weight: bold;
  overflow: hidden;
  width: 60%;
  height: auto;

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
