import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  & > h1 {
    ${({ theme }) => theme.text.t2}
    color: var(--grey);
    cursor: pointer;
    margin: 0;

    &:hover {
      color: var(--crimson);
    }
  }

  ${({ theme }) => theme.mq.atTablet`
  margin-right: 5rem;
  `}
`;

export const Wrapper = styled(motion.div)`
  display: inline-block;
  margin: 1.6% 0;
  margin-right: 5.5%;
  position: relative;
  z-index: ${({ hoverState }) => (hoverState ? "10" : "0")};
  overflow: hidden;

  ${({ theme }) => theme.text.mediumLarge}
  color: var(--grey);

  & > div {
    cursor: pointer;

    &:hover {
      color: var(--crimson);
    }
  }
`;

export const TitleWrapper = styled(motion.span)`
  cursor: pointer;
  overflow: hidden;

  &:hover {
    color: var(--crimson);
  }
`;

export const ImageOuterWrapper = styled(motion.div)`
  position: absolute;
  z-index: ${({ hoverState }) => (hoverState ? "9" : "0")};
`;

export const ImageWrapper = styled(motion.div)`
  position: absolute;

  overflow: hidden;
  width: ${({ imageWidth }) => `${imageWidth}px`};
  height: ${({ imageHeight }) => `${imageHeight}px`};

  & > img {
    width: ${({ imageWidth }) => `${imageWidth}px`};
    height: ${({ imageHeight }) => `${imageHeight}px`};
  }
`;
