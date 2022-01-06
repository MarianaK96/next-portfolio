import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.div`
  grid-column: 2 / 8;
  grid-row: 2 / -1;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${({ theme }) => theme.mq.atDesktop`
  grid-column: 2 / 12;
  grid-row: 3 / -1;
  `}
`;

export const CoreSkills = styled.div`
  grid-column: 4 / 7;
  margin-bottom: 3rem;

  ${({ theme }) => theme.mq.atTablet`
    margin-bottom: 0;
`}
`;

export const FamiliarSkills = styled.div`
  grid-column: 8 / 11;
`;

export const Container = styled.div`
  ${({ theme }) => theme.mq.atTablet`
    display: flex;
    justify-content: space-around;
`}
`;

export const Underline = styled.div`
  height: 3px;
  background-color: var(--navy);
  width: 100%;
`;

export const SkillList = styled.ul`
  padding: 0;
`;

export const Skill = styled.li`
  ${({ theme }) => theme.text.t3};
  list-style: none;
  margin-bottom: 0.5rem;
`;

export const ArrowWrapper = styled(Link)`
  & > svg {
    cursor: pointer;
  }
`;
