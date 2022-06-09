import Link from "next/link";
import {
  GridLayout,
  ProjectTitle,
  ProjectInfo,
  ProjectSkills,
  Arrow,
} from "common_components/atoms";
import { Header, Footer } from "common_components/organisms";
import {
  Wrapper,
  ArrowWrapper,
  LinkWrapper,
  Container,
} from "./Project.styles";
import React from "react";

const Project = ({ project }) => {
  return (
    <>
      <Header />
      <GridLayout>
        <Wrapper>
          {project.map((project) => {
            return (
              <React.Fragment key={project.projectTitle}>
                <Container>
                  <ProjectTitle
                    title={project.projectTitle}
                    key={project.projectTitle}
                  />
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
              </React.Fragment>
            );
          })}
          <ArrowWrapper href="/projects">
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

export default Project;
