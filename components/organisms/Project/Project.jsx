import { useState, useEffect } from "react";
import {
  GridLayout,
  ProjectTitle,
  ProjectInfo,
  ProjectSkills,
  ArrowBack,
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
} from "./Project.styles";
import { ProjectSectionAnims } from "common_components/animations";

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
                <TitleWrapper variants={headingAnim}>
                  <ProjectTitle title={project.projectTitle} />
                </TitleWrapper>

                <InfoWrapper variants={introductionAnim}>
                  <ProjectInfo info={project.projectInfo} />
                </InfoWrapper>

                <SkillsWrapper variants={skillsHeadingAnim}>
                  <ProjectSkills
                    skills={project.projectSkills}
                    variants={skillsSectionAnim}
                  />
                </SkillsWrapper>
              </>
            );
          })}
          <ArrowAnim variants={arrowAnim}>
            <ArrowWrapper href="/projects">
              <ArrowBack />
            </ArrowWrapper>
          </ArrowAnim>
        </Wrapper>
      </GridLayout>
    </>
  );
};

export default Project;
