import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: fixed;
  width: 100%;
`;

export const Name = styled.h1`
  ${({ theme }) => theme.text.bm}
  color: black;
  margin: 0;
  grid-column: 2 / span 3;
`;

export const Categories = styled.div`
  grid-column: 9 / span 2;
`;
