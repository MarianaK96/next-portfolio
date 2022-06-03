import { Footer, Header } from "common_components/organisms";
import { Wrapper, Container } from "./ProjectList.styles";
import { GridLayout, ProjectTitle } from "common_components/atoms";
import { AnimateTextIn } from "animations";
import Link from "next/link";
import { MenuItem } from "components/atoms";
import useMousePosition from "hooks/useMousePosition";

const ProjectList = ({ projects }) => {
  const { x, y } = useMousePosition();
  return (
    <>
      <Header />
      <GridLayout>
        <Wrapper>
          {projects &&
            projects.map((project) => {
              return (
                <MenuItem
                  href={"/" + project.slug}
                  key={project.slug}
                  title={project.projectTitle}
                  x={x}
                  y={y}
                  imageWidth={610}
                  imageHeight={360}
                  image={project.projectImage.url}
                />
              );
            })}
        </Wrapper>
      </GridLayout>
      <Footer />
    </>
  );
};

export default ProjectList;
