import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  grid-column: 2 / span 6;
  grid-row: 2 / -1;

  display: inline-block;
  overflow: hidden;

  ${({ theme }) => theme.mq.atDesktop`
  grid-row: 3 / -1;
  `}
`;

export const ArrowWrapper = styled(Link)`
  & > svg {
    cursor: pointer;
  }
`;

export const ProjectWrapper = styled(motion.div)`
  display: inline-block;
`;

export const SkillsWrapper = styled(motion.div)``;
export const TitleWrapper = styled(motion.div)``;
export const InfoWrapper = styled(motion.div)``;
export const ArrowAnim = styled(motion.div)``;
