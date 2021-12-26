import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: inline-block;
  margin-right: 5rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.text.b1}
  color: grey;
  cursor: pointer;
  margin: 0;

  font-size: 2.9rem;
  &:hover {
    color: crimson;
  }
`;
