import * as React from "react"

export const Arrow = (props) => {
    return (
        <svg
            width={44}
            height={16}
            viewBox="0 0 44 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M1 8h42M36 1l7 7-7 7"
                stroke="#000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Arrow
