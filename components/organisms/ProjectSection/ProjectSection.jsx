import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageContext } from "context";
import {
  Wrapper,
  Header,
  ArrowWrapper,
  LinkWrapper,
  Introduction,
  Description,
  SkillsArea,
} from "./ProjectSection.style";
import { Arrow } from "common_components/atoms";
import { anims } from "./ProjectSection.anims";

const ProjectSection = ({ shown, updatePage, project }) => {
  const [isInitial, setisInitial] = useState(true);
  const [shownStatus, setShownStatus] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShownStatus(shown);
      setisInitial(false);
    }, 1000);
  }, [shown]);

  useEffect(() => {
    console.log("project: ", project);
  }, [project]);

  const {
    projectSectionAnim,
    headingAnim,
    arrowAnim,
    introductionAnim,
    descriptionAnim,
    skillsHeadingAnim,
    skillsSectionAnim,
  } = anims;

  return (
    <PageContext.Consumer>
      {(value) => {
        let updatePage = value.updatePage;
        return (
          <Wrapper
            shownStatus={shownStatus || isInitial}
            variants={projectSectionAnim}
            animate={shown ? "displayed" : "hidden"}
          >
            {project.length > 0 && (
              <>
                <ArrowWrapper
                  onClick={() => updatePage("work")}
                  variants={arrowAnim}
                >
                  <Arrow rotation={180} />
                </ArrowWrapper>
                <Header variants={headingAnim}>
                  {project[0].node.projectTitle}
                </Header>
                {project[0].node.projectLink && (
                  <LinkWrapper>
                    <Link href={project[0].node.projectLink}>Visit Site</Link>
                  </LinkWrapper>
                )}
                <Introduction variants={introductionAnim}>
                  {project[0].node.projectIntroduction}
                </Introduction>
                <br />
                <Description variants={descriptionAnim}>
                  {project[0].node.projectDescription}
                </Description>
                {project[0].node.projectSkills && (
                  <SkillsArea variants={skillsHeadingAnim}>
                    <h3>Skills</h3>
                    <motion.p variants={skillsSectionAnim}>
                      {project[0].node.projectSkills}
                    </motion.p>
                  </SkillsArea>
                )}
              </>
            )}
          </Wrapper>
        );
      }}
    </PageContext.Consumer>
  );
};

export default ProjectSection;
