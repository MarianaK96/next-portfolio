import { Project } from "components/organisms";

import { getProject } from "utils/api/getProject";
import { getAllProjects } from "utils/api/contentful";
import { useEffect } from "react";

export const getStaticPaths = async () => {
  const res = await getAllProjects();
  const data = res.portfolioProjectCollection?.items;

  const paths = data.map((project) => {
    return {
      params: { id: project.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await getProject(id);
  const data = res.portfolioProjectCollection?.items;

  console.log("data:", data);
  return {
    props: { project: data },
  };
};

const Works = ({ project }) => {
  useEffect(() => {
    console.log(project);
  });
  return (
    <>
      <Project project={project} />
    </>
  );
};

export default Works;
