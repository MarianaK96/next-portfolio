import Link from "next/link";
import { Styles, UnderlineWrapper, Wrapper } from "./Navigation.styles";

const Navigation = () => {
  return (
    <>
      <Styles>
        <UnderlineWrapper>
          <Link href="/">
            <a>about</a>
          </Link>
        </UnderlineWrapper>
        <UnderlineWrapper>
          <Link href="/projects">
            <a>work</a>
          </Link>
        </UnderlineWrapper>
      </Styles>
    </>
  );
};

export default Navigation;
