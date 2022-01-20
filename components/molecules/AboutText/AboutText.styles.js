import styled from "styled-components";
import { motion } from "framer-motion";

export const Styles = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;

  & > h1 {
    ${({ theme }) => theme.text.t1}
  }
`;

export const Container = styled.div`
  cursor: pointer;
  & > h1 {
    ${({ theme }) => theme.text.t1};
    color: var(--crimson);
  }
`;

export const Underline = styled.div`
  height: 3px;
  width: 98%;
  background-color: var(--crimson);
  bottom: 12%;
  position: relative;

  opacity: ${({ shownStatus }) => (shownStatus ? "1" : "0")};
  transition: opacity 0.3s ease;
`;
