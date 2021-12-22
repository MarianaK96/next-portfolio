import styled from 'styled-components'
import { motion } from 'framer-motion'

export const NavWrapper = styled(motion.div)`
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 3px;
    /* border: 2px solid var(--grey); */
    background-color: var(--grey);
    border-radius: 10px;
    /* z-index: -20; */
    

`


export const WordWrapper = styled.p`
    position: relative;
    transition: all ease 0.35s;
    transform: ${({ selected }) => !selected ? `translateY(10px)` : `translateY(0)`};
`