import React, { useState, useEffect } from 'react';
import { Wrapper } from './TextAnimation.styles.js';
import { WholeTextAnim, LetterAnim } from './TextAnimation.anims';
import { motion, AnimateSharedLayout } from "framer-motion";


const TextAnimation = ({ text, byLetter = true, config, colour, delay = 100, customValue = 0.05 }) => {
    let splitText

    const [status, setStatus] = useState('inactive')

    useEffect(() => {
        // splitText = byLetter ? text.split('') : text.split(' ')
        const timer = setTimeout(() => {
            setStatus('active')
        }, delay);
        return () => clearTimeout(timer);
    }, [])

    const createMarkup = (value) => {
        return { __html: value };
    }

    return (
        <Wrapper custom={customValue} initial={'inactive'} animate={status} variants={WholeTextAnim} colour={colour} >
            { text.split(byLetter ? '' : ' ').map((item, i) => <motion.span key={'item-' + i} variants={LetterAnim} dangerouslySetInnerHTML={createMarkup(`${item}${byLetter === false ? '&nbsp;' : ''}`)}></motion.span>)}
        </Wrapper >
    )
}

export default TextAnimation;

