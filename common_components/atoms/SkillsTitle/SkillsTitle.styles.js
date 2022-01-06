import styled from "styled-components";
import { motion } from "framer-motion";

export const Title = styled.h1`
  width: 100%;
  margin: 0;

  ${({ theme }) => theme.text.t2}
  color: var(--navy);
`;
