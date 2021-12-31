import { Header } from "common_components/organisms";
import { GridLayout } from "common_components/atoms";
import { ProjectTitles } from "components/atoms";
import { Wrapper, TitleWrapper } from "./ProjectList.styles";
import { ProjectListAnims } from "common_components/animations";

const ProjectList = ({ projects }) => {
  const { projectList, projectTitle } = ProjectListAnims;
  return (
    <>
      <Header />
      <GridLayout>
        <Wrapper variants={projectList} initial="hidden" animate="visible">
          {projects &&
            projects.map((project) => {
              return (
                <TitleWrapper variants={projectTitle}>
                  <ProjectTitles
                    title={project.projectTitle}
                    key={project.slug}
                    slug={"/" + project.slug}
                  />
                </TitleWrapper>
              );
            })}
        </Wrapper>
      </GridLayout>
    </>
  );
};

export default ProjectList;
