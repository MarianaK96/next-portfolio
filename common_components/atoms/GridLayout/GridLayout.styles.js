import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.mq.atTablet`
    grid-template-columns: repeat(10, 1fr);
  `}
`;
