import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: ${({ shownStatus }) => shownStatus ? 'inline-block' : 'none'};

    margin: 15vh 5vh 0;
    ${({ theme }) => theme.mq.atDesktop`
        margin: 20vh 10vh 0;
    `}
`

export const ArrowWrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: flex-start;

`

export const Header = styled(motion.h1)`
    ${({ theme }) => theme.text.mediumLarge}
    color: var(--navy);
    display: inline-block;
    text-align: left;

`

export const LinkWrapper = styled(motion.div)`
    ${({ theme }) => theme.text.smallMedium}
    color: var(--navy);
    display: inline-block;
    margin-left: 0;
    text-align: left;
    ${({ theme }) => theme.mq.atTablet`
        margin-left: 60px;
    `}

`

export const Description = styled(motion.p)`
    ${({ theme }) => theme.text.smallMedium}
    color: var(--offBlack);
    text-align: left;
    max-width: 750px;



`

export const Introduction = styled(motion.p)`
    ${({ theme }) => theme.text.small}
    color: var(--offBlack);
    text-align: left;
    max-width: 750px;


`

export const SkillsArea = styled(motion.div)`

    margin-top: 5vh;

    & > h3 {
        ${({ theme }) => theme.text.smallMedium}
        color: var(--offBlack);
    }

    & > p {
        ${({ theme }) => theme.text.smallMedium}
        color: var(--offBlack);
    }

`
