import styled from "styled-components";

export const Styles = styled.div`
  & > a {
    ${({ theme }) => theme.text.bm}
    cursor: pointer;
    text-decoration: none;
    margin-right: 1.5rem;
    color: black;
  }
`;
