import { ProjectList } from "components/templates";
import { useEffect } from "react";
import { getAllProjects } from "utils/api/contentful";

export const getStaticProps = async () => {
  const res = await getAllProjects();
  const data = res.portfolioProjectCollection?.items;

  return {
    props: { projects: data },
  };
};

const Projects = ({ projects }) => {
  useEffect(() => {
    console.log(projects);
  });
  return (
    <>
      <ProjectList projects={projects} />
    </>
  );
};

export default Projects;
