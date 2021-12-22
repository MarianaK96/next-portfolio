import React, { useState, useEffect } from "react";
import { Wrapper } from "./ProjectList.style";
import { useMousePosition } from "hooks";
import { MenuItem } from "components/atoms";
import { anims } from "./ProjectList.anims";

const ProjectList = ({ projects, shown, addProjectPages, updatePage }) => {
  const [isInitial, setisInitial] = useState(true);
  const [shownStatus, setShownStatus] = useState(false);
  const { x, y } = useMousePosition();
  const { projectList } = anims;

  useEffect(() => {
    setTimeout(() => {
      setShownStatus(shown);
      setisInitial(false);
    }, 1000);
  }, [shown]);

  useEffect(() => {
    let projectTitles = projects.map((item) => item.node.projectTitle);
    addProjectPages(projectTitles);
  }, [projects]);

  return (
    <Wrapper
      variants={projectList}
      style={!shown && { pointerEvents: "none" }}
      shownStatus={
        shownStatus || isInitial
      } /* animate={shown ? 'displayed' : 'hidden'} */
    >
      {projects.map((project, i) => (
        <MenuItem
          key={`project-key-${i}`}
          status={shown}
          projectData={project}
          x={x}
          y={y}
          imageWidth={300}
          imageHeight={300}
          updatePage={updatePage}
        />
      ))}
    </Wrapper>
  );
};

export default ProjectList;
