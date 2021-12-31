import * as React from "react";

export const ArrowFront = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--offBlack)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-right"
      {...props}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
};

export default ArrowFront;
