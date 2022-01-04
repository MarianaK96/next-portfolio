const TakeALookAnims = {
  initial: {
    opacity: 0,
    x: -200,
  },
  displayed: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: 50,
  },
  transition: {
    // delay: 1.2,
    ease: [0.45, 0, 0.55, 1],
    duration: 0.45,
  },
};

export default TakeALookAnims;
