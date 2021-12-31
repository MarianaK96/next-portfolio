import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  grid-column: 2 / 9;
  grid-row: 2 / -1;
  overflow: hidden;

  ${({ theme }) => theme.mq.atDesktop`
  grid-row: 3 / -1;
  `}
`;

export const TitleWrapper = styled(motion.div)``;
