import {
  GridLayout,
  ProjectTitle,
  ProjectInfo,
  ProjectSkills,
  Arrow,
} from "common_components/atoms";
import { Header } from "common_components/organisms";
import {
  Wrapper,
  ArrowWrapper,
  LinkWrapper,
  Container,
} from "./Project.styles";

const Project = ({ project }) => {
  return (
    <>
      <Header />
      <GridLayout>
        <Wrapper>
          {project.map((project) => {
            return (
              <>
                <Container>
                  <ProjectTitle title={project.projectTitle} />
                  <LinkWrapper
                    href={project.projectLink}
                    target={"blank"}
                    rel="nofollow"
                  >
                    Visit site
                  </LinkWrapper>
                </Container>
                <ProjectInfo info={project.projectInfo} />
                <ProjectSkills skills={project.projectSkills} />
              </>
            );
          })}
          <ArrowWrapper href="/projects">
            <div>
              <Arrow rotation={`180`} />
            </div>
          </ArrowWrapper>
        </Wrapper>
      </GridLayout>
    </>
  );
};

export default Project;
