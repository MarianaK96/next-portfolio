import { TitleWrapper, Title, Wrapper } from "./ProjectTitles.styles";

const ProjectTitles = ({ title }) => {
  return (
    <>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
    </>
  );
};

export default ProjectTitles;
