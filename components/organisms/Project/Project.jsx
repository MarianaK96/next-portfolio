import { LinkWrapper, Wrapper, Image, TextContainer } from "./Project.styles";

const Project = ({ title, link, linkText, imgSrc, imgAlt }) => {
  return (
    <LinkWrapper href={link} target={"blank"} rel="nofollow">
      <Wrapper>
        <Image className="image" background={imgSrc} alt={imgAlt} />
        <TextContainer>
          <figcaption>{title}</figcaption>
          <a>{linkText}</a>
        </TextContainer>
      </Wrapper>
    </LinkWrapper>
  );
};

export default Project;
