import Link from "next/link";
import styled from "styled-components";

export const TitleWrapper = styled(Link)`
  display: inline-block;
  margin-right: 5rem;

  ${({ theme }) => theme.text.t2}
  color: var(--grey);
  cursor: pointer;
  margin: 0;

  &:hover {
    color: var(--crimson);
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.text.t2}
  color: var(--grey);
  cursor: pointer;
  margin: 0;

  &:hover {
    color: var(--crimson);
  }
`;
