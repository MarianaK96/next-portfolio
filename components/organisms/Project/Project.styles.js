import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  grid-column: 2 / span 6;
  grid-row: 2 / -1;

  display: inline-block;

  ${({ theme }) => theme.mq.atDesktop`
  grid-row: 3 / -1;
  `}
`;

export const Container = styled.div`
  display: flex;
`;

export const LinkWrapper = styled.a`
  align-self: center;
  margin-top: 0.5rem;
  display: inline-block;
  margin-left: 0;

  ${({ theme }) => theme.text.bxs}
  font-weight: bold;
  color: #1b43ef;
  text-align: left;

  ${({ theme }) => theme.mq.atTablet`
    margin-left: 60px;
`}
`;

export const ArrowWrapper = styled(Link)`
  & > svg {
    cursor: pointer;
  }
`;

// export const ProjectWrapper = styled(motion.div)`
//   display: inline-block;
// `;

// export const Title = styled.div`
//   & > h1 {
//     ${({ theme }) => theme.text.t2}
//     color: var(--navy);
//     cursor: pointer;
//     margin: 0;
//   }
//   height: auto;

//   grid-column: 2;
//   grid-row: 4 / 6;
// `;

// export const SkillsWrapper = styled(motion.div)``;
// export const TitleWrapper = styled(motion.div)``;
// export const InfoWrapper = styled(motion.div)``;
// export const ArrowAnim = styled(motion.div)``;
