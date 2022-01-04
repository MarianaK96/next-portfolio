import { useState, useEffect } from "react";
import {
  GridLayout,
  ProjectTitle,
  ProjectInfo,
  ProjectSkills,
  ArrowBack,
  ArrowFront,
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
} from "./Project.styles";
import { ProjectSectionAnims } from "common_components/animations";
import { AnimateTextIn } from "common_components/animations";

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
        <Wrapper
          variants={projectSectionAnim}
          initial="hidden"
          animate="visible"
        >
          {project.map((project) => {
            return (
              <>
                <ProjectTitle title={project.projectTitle} />
                <ProjectInfo info={project.projectInfo} />
                <ProjectSkills skills={project.projectSkills} />

                {/* <Title>
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
              </> */}
              </>
            );
          })}
          <ArrowWrapper href="/projects">
            <ArrowFront rotation={`180`} />
          </ArrowWrapper>

          {/* <ArrowAnim variants={arrowAnim}>
            <ArrowWrapper href="/projects">
              <ArrowFront rotation={`180`} />
            </ArrowWrapper>
          </ArrowAnim> */}
        </Wrapper>
      </GridLayout>
    </>
  );
};

export default Project;
