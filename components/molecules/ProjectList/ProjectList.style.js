import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: ${({ shownStatus }) => shownStatus ? 'auto' : 'none'};
    margin: 15vh 5vh 0;
    ${({ theme }) => theme.mq.atDesktop`
        margin: 20vh 10vh 0;
    `}


    & #img {
        width: 500px;
        height: 500px;
    }


    .hover-reveal {
        position: absolute;
        z-index: -1;
        width: 220px;
        height: 320px;
        top: 0;
        left: 0;
        pointer-events: none;
        opacity: 0;
    }
        
    .hover-reveal__inner,
    .hover-reveal__img {
        width: 100%;
        height: 100%;
        position: relative;
    }

    /* .hover-reveal__img {
        background-size: cover;
        background-position: 50% 50%;
    } */
`