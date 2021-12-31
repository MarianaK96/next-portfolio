import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #8d99ae;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const TextWrapper = styled.div`
  ${({ theme }) => theme.text.bxs}
  color: white;
  margin: 0 auto;
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
