import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  ${({ theme }) => theme.text.bxs}
  color: black;
`;
