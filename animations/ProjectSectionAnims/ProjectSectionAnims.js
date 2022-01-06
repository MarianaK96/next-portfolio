const ProjectSectionAnims = {
  projectSectionAnim: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 3,
        staggerChildren: 0.1,
      },
    },
  },
  headingAnim: {
    hidden: { translateY: 200, opacity: 0 },
    visible: {
      translateY: 0,
      opacity: 1,
    },
    transition: {
      ease: "easeIn",
    },
  },
  arrowAnim: {
    hidden: { translateY: 200, opacity: 0 },
    visible: {
      translateY: 0,
      opacity: 1,
    },
    transition: {
      ease: "easeIn",
    },
  },
  introductionAnim: {
    hidden: { translateY: 200, opacity: 0 },
    visible: {
      translateY: 0,
      opacity: 1,
    },
    transition: {
      ease: "easeIn",
    },
  },
  skillsHeadingAnim: {
    hidden: { translateY: 200, opacity: 0 },
    visible: {
      translateY: 0,
      opacity: 1,
    },
    transition: {
      ease: "easeIn",
    },
  },
  skillsSectionAnim: {
    hidden: { translateY: 200, opacity: 0 },
    visible: {
      translateY: 0,
      opacity: 1,
    },
    transition: {
      ease: "easeIn",
    },
  },
};

export default ProjectSectionAnims;
