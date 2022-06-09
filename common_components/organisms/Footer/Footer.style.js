import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 1rem;
  padding-top: 1rem;

  background-color: #8d99ae;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const TextWrapper = styled.div`
  margin: 0 auto;

  ${({ theme }) => theme.text.bxs}
  color: white;
`;

export const IconsWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 1rem;

  & > svg {
    cursor: pointer;
  }
`;
