import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  left: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  padding: 10px;

  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: var(--greyOpaque);
  }

  transform: scale(1);

  ${({ theme }) => theme.mq.atTablet`
    transform: scale(1.5);
    `}
`;
