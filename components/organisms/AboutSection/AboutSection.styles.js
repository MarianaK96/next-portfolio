import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
`;

export const AboutWrapper = styled.div`
  grid-column: 2 / span 11;
  display: flex;
  height: 100%;
  justify-content: flex-end;

  flex-direction: column;
`;

export const LookWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 1rem;
`;

// display: flex;
// align-items: center;
// flex-flow: wrap;
// height: 100%;
// margin-top: 10vh;
