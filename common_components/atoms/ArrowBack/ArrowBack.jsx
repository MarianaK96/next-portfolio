import * as React from "react";

export const ArrowBack = (props) => {
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
      className="feather feather-arrow-left"
      {...props}
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
};

export default ArrowBack;
