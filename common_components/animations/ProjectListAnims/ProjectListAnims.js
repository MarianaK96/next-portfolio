const ProjectListAnims = {
  projectList: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        staggerChildren: 0.2,
      },
    },
  },
  projectTitle: {
    hidden: { translateY: 200, opacity: 0 },
    visible: {
      translateY: 0,
      opacity: 1,
    },
    transition: {
      ease: "ease",
    },
  },
};

export default ProjectListAnims;
