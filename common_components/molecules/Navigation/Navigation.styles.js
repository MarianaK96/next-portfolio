import styled from "styled-components";
import Link from "next/link";

export const Styles = styled.div`
  display: flex;
  justify-content: space-around;
  width: auto;
  margin-right: 1.5rem;

  ${({ theme }) => theme.text.bm}
  cursor: pointer;
  font-weight: 500;
  color: var(--offBlack);
`;

export const UnderlineWrapper = styled.div`
  position: relative;
  width: auto;
  z-index: 1;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    right: 0;
    width: 0;
    height: 3px;
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    background-color: black;
  }

  &:hover::after {
    left: 0;
    right: auto;
    width: 100%;
    z-index: -1;
  }

  & > a {
    color: black;
    text-decoration: none;
  }
`;
