import styled from "styled-components";
import { motion } from "framer-motion";

export const Title = styled.h1`
  grid-column: 2;
  grid-row: 4;
  margin: 0;

  ${({ theme }) => theme.text.t1}
  color: var(--navy);
`;
