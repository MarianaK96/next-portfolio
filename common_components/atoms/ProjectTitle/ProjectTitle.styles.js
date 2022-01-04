import styled from "styled-components";
import { motion } from "framer-motion";

export const Title = styled.h1`
  ${({ theme }) => theme.text.t2}
  color: var(--navy);
  cursor: pointer;
  margin: 0;

  grid-column: 2;
  grid-row: 4;
`;
