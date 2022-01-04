import { TitleWrapper, Title, Test } from "./ProjectTitles.styles";

const ProjectTitles = ({ title, slug }) => {
  return (
    <>
      <TitleWrapper href={slug} />
    </>
  );
};

export default ProjectTitles;
