import * as React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import { AboutSection, ProjectSection } from "components/organisms";
import { ProjectList } from "components/molecules";
import { PageContext } from "context";
import { Header } from "common_components/organisms";

const IndexPage = ({ data }) => {
  const projects = data.allContentfulIanProjects.edges;

  return (
    <>
      <Header />
      <section>
        <PageContext.Consumer>
          {(value) => {
            let selectedPage = value.pageStatus.filter((item) => item.selected);
            let selectedPageTitle = selectedPage[0]?.page;
            let selectedProject = projects.filter(
              (item) => item.node.projectTitle === selectedPageTitle
            );
            return (
              <>
                <AboutSection shown={selectedPageTitle === "about"} />
                <ProjectList
                  shown={selectedPageTitle === "work"}
                  projects={projects}
                  addProjectPages={value.addProjectPages}
                  updatePage={value.updatePage}
                />
                <ProjectSection
                  shown={
                    selectedPageTitle !== "work" &&
                    selectedPageTitle !== "about"
                  }
                  updatePage={value.updatePage}
                  project={selectedProject}
                />
              </>
            );
          }}
        </PageContext.Consumer>
      </section>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      data: [],
    },
  };
}

export const query = gql`
  query MyQuery {
    allContentfulIanProjects {
      edges {
        node {
          id
          projectTitle
          projectDescription
          projectSkills
          projectIntroduction
          projectLink
          projectImages {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
