import { Wrapper, Text, Title } from "./ProjectSkills.styles";

const ProjectSkills = ({ skills }) => {
  return (
    <>
      <Wrapper>
        <Title>Skills</Title>
        <Text>{skills}</Text>
      </Wrapper>
    </>
  );
};

export default ProjectSkills;
