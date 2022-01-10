import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  margin-top: 5vh;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.text.t3}
  color: var(--offBlack);
`;

export const Text = styled.p`
  ${({ theme }) => theme.text.bm}
  color: var(--offBlack);
`;
