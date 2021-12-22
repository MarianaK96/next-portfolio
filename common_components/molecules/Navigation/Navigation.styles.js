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

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 100;

  & > ul {
    display: flex;
    flex-direction: row;
    margin: 0;
  }

  & li {
    position: relative;
    list-style: none;
    ${({ theme }) => theme.text.bm}
    color: var(--offBlack);
    cursor: pointer;
    margin-left: 30px;
    user-select: none;
  }

  & p {
    margin: 0;
  }
`;
