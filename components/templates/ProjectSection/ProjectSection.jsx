import { useEffect, useState } from "react";
import { Header } from "common_components/organisms";
import { Project } from "components/organisms";
import { GridLayout } from "common_components/atoms";
import { ProjectWrapper, TitleWrapper } from "./ProjectSection.styles";
import { getAllProjects } from "utils/api/contentful";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const themePageTheme = {
    headerColor: "var(--plum-dark)",
    underlineColor: "var(--plum)",
  };

  useEffect(async () => {
    const data = await getAllProjects();
    setProjects(data?.stonecatProjectCollection?.items);
  }, []);

  return (
    <>
      <Header />
      <GridLayout>
        <ProjectWrapper>
          {projects &&
            projects.map((project) => {
              return (
                <Project
                  key={project.title}
                  title={project.title}
                  link={project.linkLocation}
                  linkText={project.linkTitle}
                  imgSrc={project.image.url}
                  imgAlt={project.image.description}
                />
              );
            })}
        </ProjectWrapper>
      </GridLayout>
    </>
  );
};

export default ProjectSection;
