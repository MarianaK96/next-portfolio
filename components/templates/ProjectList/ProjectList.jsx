import { Header } from "common_components/organisms";
import { GridLayout, ProjectTitle } from "common_components/atoms";
import { ProjectTitles } from "components/atoms";
import { Wrapper, TitleWrapper, Container } from "./ProjectList.styles";
import { ProjectListAnims } from "animations";
import { AnimateTextIn } from "animations";
import Link from "next/link";

const ProjectList = ({ projects }) => {
  const { projectList, projectTitle } = ProjectListAnims;
  return (
    <>
      <Header />
      <GridLayout>
        <Wrapper>
          {projects &&
            projects.map((project) => {
              return (
                <Link href={"/" + project.slug}>
                  <Container key={project.slug}>
                    <AnimateTextIn
                      title={project.projectTitle}
                      color={`var(--grey)`}
                    />
                  </Container>
                </Link>
              );
            })}
        </Wrapper>
      </GridLayout>
    </>
  );
};

export default ProjectList;
