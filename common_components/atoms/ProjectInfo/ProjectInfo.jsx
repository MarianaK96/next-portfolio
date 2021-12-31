import { Wrapper, Text } from "./ProjectInfo.styles";

const ProjectInfo = ({ info }) => {
  return (
    <>
      <Wrapper>
        <Text>{info}</Text>
      </Wrapper>
    </>
  );
};

export default ProjectInfo;
