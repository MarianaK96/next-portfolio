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
  width: 60%;
  height: auto;
  overflow: hidden;

  color: var(--grey);
  font-weight: bold;

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

export const Container = styled.div`
  cursor: pointer;
  & > h1 {
    ${({ theme }) => theme.text.t2}
  }
`;

export const Underline = styled.div`
  height: 3px;
  width: 98%;
  background-color: var(--crimson);
  bottom: 12%;
  position: relative;

  opacity: ${({ shownStatus }) => (shownStatus ? "1" : "0")};
  transition: opacity 4s ease;
`;
