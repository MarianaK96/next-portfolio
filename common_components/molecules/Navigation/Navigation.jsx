import Link from "next/link";
import { Styles, UnderlineWrapper, Wrapper } from "./Navigation.styles";

const Navigation = () => {
  return (
    <>
      <Styles>
        <UnderlineWrapper>
          <Link href="/">about</Link>
        </UnderlineWrapper>
        <UnderlineWrapper>
          <Link href="/projects">work</Link>
        </UnderlineWrapper>
      </Styles>
    </>
  );
};

export default Navigation;
