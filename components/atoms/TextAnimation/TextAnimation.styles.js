import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
    /* ${({ theme }) => theme.text.mediumLarge} */
    /* color: var(--grey); */
    height: 100%;
    overflow: hidden;
    display: inline-flex;
    & > span {
        /* position: relative; */
        /* overflow: hidden; */
        color: ${({ colour }) => colour};
    }
`

