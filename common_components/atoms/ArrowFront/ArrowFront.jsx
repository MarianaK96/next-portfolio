import * as React from "react";
import { Wrapper } from "./ArrowFront.styles";

export const ArrowFront = ({ rotation }) => {
  return (
    <Wrapper>
      <svg
        width={44}
        height={16}
        viewBox="0 0 44 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path
          d="M1 8h42M36 1l7 7-7 7"
          stroke="var(--offBlack)"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Wrapper>
  );
};

export default ArrowFront;
