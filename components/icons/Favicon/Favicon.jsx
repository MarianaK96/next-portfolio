import * as React from "react";

export const Favicon = (props) => {
  return (
    <svg
      width={33}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" d="M0 0h33v32H0z" />
      <path
        d="M5.04 15.606c0-.78.207-2.324 1.035-2.798 1.05-.6 1.948-.21 1.948 1.16 0 2.439-.187 4.809-.187 7.232M8.023 15.792c.328-1.683 1.098-3.17 2.984-3.17 1.459 0 .932 2.289.932 3.357"
        stroke="#000"
        strokeLinecap="square"
      />
      <path
        d="M11.94 15.792c.286-1.469.54-2.451 2.144-2.807 1.255-.28 2.065.062 2.145 1.502.122 2.204.186 4.463.186 6.713M20.331 7.027c0 2.61.373 5.175.373 7.822 0 1.961.186 3.836.186 5.792"
        stroke="#000"
        strokeLinecap="square"
      />
      <path
        d="M20.704 13.74c0-2.656 3.978-4.345 4.465-.932.279 1.947-1.95 4.29-3.905 4.29"
        stroke="#000"
        strokeLinecap="square"
      />
      <path
        d="M21.264 17.098c1.546 0 2.712-.132 3.636 1.305.525.817.964 1.72 1.958 2.051"
        stroke="#000"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default Favicon;
