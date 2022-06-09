import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin-top: 1.5rem;
  position: fixed;
  width: 100%;

  ${({ theme }) => theme.mq.atDesktop`
  grid-template-columns: repeat(12, 1fr);
  `}
`;

export const LinkStyle = styled.a`
  grid-column: 2 / span 2;
  margin: 0;
  cursor: pointer;
  ${({ theme }) => theme.text.bm};
  font-weight: bold;
  color: black;
  text-decoration: none;
`;

export const Categories = styled.div`
  grid-column: 6 / span 3;

  ${({ theme }) => theme.mq.atDesktop`
  grid-column: 10 / span 2;
  `}
`;
