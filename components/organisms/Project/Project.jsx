import { useState, useEffect } from "react";
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
  SkillsWrapper,
  ProjectWrapper,
  TitleWrapper,
  InfoWrapper,
  ArrowAnim,
  Title,
  LinkWrapper,
  Container,
} from "./Project.styles";
import { ProjectSectionAnims } from "animations";
import { AnimateTextIn } from "animations";

const Project = ({ project }) => {
  const {
    projectSectionAnim,
    headingAnim,
    arrowAnim,
    introductionAnim,
    descriptionAnim,
    skillsHeadingAnim,
    skillsSectionAnim,
  } = ProjectSectionAnims;

  const [test, setTest] = useState("hidden");

  useEffect(() => {
    console.log("test: ", test);
  }, [test]);
  return (
    <>
      {/* <button
        onClick={() => {
          test === "hidden" ? setTest("visible") : setTest("hidden");
        }}
      >
        set test
      </button> */}
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
            <Arrow rotation={`180`} />
          </ArrowWrapper>
        </Wrapper>
      </GridLayout>
    </>
  );
};

export default Project;

{
  /* <Title>
                  <AnimateTextIn title={project.projectTitle} />
                </Title>

                <InfoWrapper variants={introductionAnim}>
                  <ProjectInfo info={project.projectInfo} />
                </InfoWrapper>

                <SkillsWrapper variants={skillsHeadingAnim}>
                  <ProjectSkills
                    skills={project.projectSkills}
                    variants={skillsSectionAnim}
                  />
                </SkillsWrapper>
              </> */
}

{
  /* <ArrowAnim variants={arrowAnim}>
            <ArrowWrapper href="/projects">
              <ArrowFront rotation={`180`} />
            </ArrowWrapper>
          </ArrowAnim> */
}
