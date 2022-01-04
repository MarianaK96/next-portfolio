import styled from "styled-components";
import { motion } from "framer-motion";

export const TitleStyles = styled.h1`
  margin: 0;
  color: ${({ color }) => color};

  overflow: hidden;
`;

export const Wrapper = styled.div`
  width: auto;
  height: auto;
`;

export const Letter = styled(motion.div)`
  display: inline-block;
  white-space: nowrap;
`;

export const Word = styled.span`
  display: inline-block;
  white-space: nowrap;
`;
