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

export const Name = styled.h1`
  grid-column: 2 / span 3;
  margin: 0;

  ${({ theme }) => theme.text.bm}
  color: black;
`;

export const Categories = styled.div`
  grid-column: 6 / span 3;

  ${({ theme }) => theme.mq.atDesktop`
  grid-column: 10 / span 2;
  `}
`;
