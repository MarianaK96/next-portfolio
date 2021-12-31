import { TitleWrapper, Title, Test } from "./ProjectTitles.styles";

const ProjectTitles = ({ title, slug }) => {
  return (
    <>
      <TitleWrapper href={slug}>
        <Title>{title}</Title>
      </TitleWrapper>
    </>
  );
};

export default ProjectTitles;
