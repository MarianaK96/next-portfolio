import {
  TextWrapper,
  FooterContainer,
  IconsWrapper,
  Wrapper,
} from "./Footer.style";
import { Email, Github, LinkedIn } from "components/icons";
import { GridLayout } from "common_components/atoms";

const Footer = () => {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <>
      <FooterContainer>
        <Wrapper>
          <IconsWrapper>
            <Email
              onClick={() => openLink("mailto:stasiakmariana@gmail.com")}
            />
            <Github onClick={() => openLink("https://github.com/MarianaK96")} />
            <LinkedIn
              onClick={() =>
                openLink(
                  "https://www.linkedin.com/in/mariana-koudela-437b09196/"
                )
              }
            />
          </IconsWrapper>

          <TextWrapper>
            Mariana Koudela — {new Date().getFullYear()}
          </TextWrapper>
        </Wrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
