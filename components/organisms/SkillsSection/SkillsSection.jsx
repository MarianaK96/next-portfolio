import React, { useState, useEffect } from "react";
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
import { Footer, Header } from "common_components/organisms";
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
                <Skill>Typescript</Skill>
                <Skill>Next Js.</Skill>
              </SkillList>
            </CoreSkills>
            <FamiliarSkills>
              <SkillsTitle title={`Familiar Skills`} />
              <Underline />
              <SkillList>
                <Skill>Vue.js</Skill>
                <Skill>C#</Skill>
                <Skill>Contentful</Skill>
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
      <Footer />
    </>
  );
};

export default AboutSection;
