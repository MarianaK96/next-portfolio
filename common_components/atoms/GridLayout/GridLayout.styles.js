import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  width: 100%;
  height: 100vh;

  ${({ theme }) => theme.mq.atTablet`
    grid-template-columns: repeat(12, 1fr);
  `}
`;
