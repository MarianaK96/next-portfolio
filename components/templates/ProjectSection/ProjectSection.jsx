import { useEffect, useState } from "react";
import { Header } from "common_components/organisms";
import { Project } from "components/organisms";
import { GridLayout } from "common_components/atoms";
import { ProjectTitles } from "components/atoms";
import { ProjectWrapper, TitleWrapper, Wrapper } from "./ProjectSection.styles";
import { getAllProjects } from "utils/api/contentful";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const themePageTheme = {
    headerColor: "var(--plum-dark)",
    underlineColor: "var(--plum)",
  };

  useEffect(async () => {
    const data = await getAllProjects();
    setProjects(data?.portfolioProject?.items);
  }, []);

  return (
    <>
      <Header />
      <GridLayout>
        <Wrapper>
          {projects &&
            projects.map((project) => {
              return (
                <ProjectTitles
                  title={project.projectTitle}
                  key={project.projectTitle}
                />
                // <Project
                //   key={project.title}
                //   title={project.title}
                //   link={project.linkLocation}
                //   linkText={project.linkTitle}
                //   imgSrc={project.image.url}
                //   imgAlt={project.image.description}
                // />
              );
            })}
        </Wrapper>
      </GridLayout>
    </>
  );
};

export default ProjectSection;
