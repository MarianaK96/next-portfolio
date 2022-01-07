import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  left: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 65px;
  padding: 10px;

  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: var(--greyOpaque);
  }
`;
