import styled from "styled-components";
import { motion } from "framer-motion";

export const TitleStyles = styled(motion.h1)`
  margin: 0;
  color: ${({ color }) => color};
  overflow: hidden;
`;

export const Letter = styled(motion.div)`
  display: inline-block;
  white-space: nowrap;
`;

export const Word = styled.span`
  display: inline-block;
  white-space: nowrap;
`;
