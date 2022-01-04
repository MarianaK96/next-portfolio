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

// const ProjectSectionAnims = {
//   projectSectionAnim: {
//     displayed: {
//       transition: {
//         staggerChildren: 0.07,
//         staggerDirection: -1,
//       },
//     },
//     hidden: {
//       transition: {
//         staggerChildren: 0.07,
//         staggerDirection: -1,
//       },
//     },
//   },
//   headingAnim: {
//     hidden: { opacity: 0 },
//     displayed: { opacity: 1 },
//   },
//   arrowAnim: {
//     hidden: { opacity: 0 },
//     displayed: { opacity: 1 },
//   },
//   introductionAnim: {
//     hidden: { opacity: 0 },
//     displayed: { opacity: 1 },
//   },
//   skillsHeadingAnim: {
//     hidden: { opacity: 0 },
//     displayed: { opacity: 1 },
//   },
//   skillsSectionAnim: {
//     hidden: { opacity: 0 },
//     displayed: { opacity: 1 },
//   },
// };

// export default ProjectSectionAnims;
