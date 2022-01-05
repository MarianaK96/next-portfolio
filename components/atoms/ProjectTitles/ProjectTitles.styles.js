import Link from "next/link";
import styled from "styled-components";

export const TitleWrapper = styled(Link)`
  display: inline-block;
  margin-right: 5rem;
  margin: 0;

  ${({ theme }) => theme.text.t2}
  color: var(--grey);
  cursor: pointer;

  &:hover {
    color: var(--crimson);
  }
`;

export const Title = styled.h1`
  margin: 0;

  ${({ theme }) => theme.text.t2}
  color: var(--grey);
  cursor: pointer;

  &:hover {
    color: var(--crimson);
  }
`;
