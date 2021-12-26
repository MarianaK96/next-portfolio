import styled from "styled-components";

export const Wrapper = styled.div`
  grid-column: 2 / span 9;
  grid-row: 3;
`;

export const PageWrapper = styled.div``;

export const ProjectWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  margin: 0;
  padding: 0;
  margin-bottom: 12rem;
  grid-column: 1 / 11;

  ${({ theme }) => theme.mq.atDesktop`
    grid-column: 2 / 10;
    
  `}
  ${({ theme }) => theme.mq.atWidescreen`
    grid-column: 3 / 9;
  `}
`;

export const TitleWrapper = styled.div`
  grid-column: 1 / 11;
  margin: 8rem 0 4rem;
  text-align: center;

  ${({ theme }) => theme.mq.atDesktop`
  grid-column: 2 / 10;
  margin: 12rem 0 6rem;
  text-align: left;
`}

  ${({ theme }) => theme.mq.atWidescreen`
  grid-column: 3 / 9;
`}
`;
