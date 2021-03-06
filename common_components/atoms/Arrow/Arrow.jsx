import * as React from "react";
import { Wrapper } from "./Arrow.styles";

export const Arrow = ({ rotation }) => {
  return (
    <Wrapper>
      <svg
        width={70}
        height={20}
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

export default Arrow;
