import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  width: 100%;
  & > p {
    ${({ theme }) => theme.text.t3}
    color: black;
    margin-left: auto;
    margin-bottom: 1vh;
  }

  & > div {
    margin-left: auto;
  }
`;
