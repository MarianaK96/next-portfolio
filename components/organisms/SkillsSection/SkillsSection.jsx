import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Wrapper,
  CoreSkills,
  FamiliarSkills,
  Container,
  Underline,
  Skill,
  SkillList,
  ArrowWrapper,
} from "./SkillsSection.styles.js";
import { Header } from "common_components/organisms";
import {
  GridLayout,
  ProjectTitle,
  ProjectInfo,
  SkillsTitle,
  Arrow,
} from "common_components/atoms";

const AboutSection = () => {
  return (
    <>
      <Header />
      <GridLayout>
        <Wrapper>
          <Container>
            <CoreSkills>
              <SkillsTitle title={`Core skills`} />
              <Underline />
              <SkillList>
                <Skill>Javascript</Skill>
                <Skill>React</Skill>
                <Skill>Next Js.</Skill>
              </SkillList>
            </CoreSkills>
            <FamiliarSkills>
              <SkillsTitle title={`Familiar Skills`} />
              <Underline />
              <SkillList>
                <Skill>Contentful</Skill>
                <Skill>Vue.js</Skill>
                <Skill>User research</Skill>
              </SkillList>
            </FamiliarSkills>
          </Container>
          <ArrowWrapper href="/">
            <div>
              <Arrow rotation={`180`} />
            </div>
          </ArrowWrapper>
        </Wrapper>
      </GridLayout>
    </>
  );
};

export default AboutSection;
