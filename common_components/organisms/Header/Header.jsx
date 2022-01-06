import { Wrapper, Name, Categories, LinkStyle } from "./Header.styles.js";
import { GridLayout } from "common_components/atoms";
import { Navigation } from "common_components/molecules";
import Link from "next/link";

const Header = () => {
  return (
    <Wrapper>
      <Link href="/">
        <LinkStyle>Mariana Koudela</LinkStyle>
      </Link>
      <Categories>
        <Navigation />
      </Categories>
    </Wrapper>
  );
};

export default Header;
