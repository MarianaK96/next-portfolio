export const WholeTextAnim = {
    initial: {

    },
    active: (customVal) => ({
        transition: { staggerChildren: customVal, staggerDirection: -1 }
    }),
    inactive: {

        transition: { staggerChildren: 0.07 }
    }
}
export const LetterAnim = {
    active: {
        y: 0,
        opacity: 1,
        transition: {
            y: { ease: [0.45, 0, 0.55, 1], duration: .76 }
        }
    },
    inactive: {
        y: 100,
        opacity: 0,
        transition: {
            y: { ease: [0.45, 0, 0.55, 1], duration: .76 }
        }
    }
}