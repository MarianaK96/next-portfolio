import { Wrapper, Name, Categories } from "./Header.styles.js";
import { GridLayout } from "common_components/atoms";
import { Navigation } from "common_components/molecules";

const Header = () => {
  return (
    <Wrapper>
      <Name>Mariana Koudela</Name>
      <Categories>
        <Navigation />
      </Categories>
    </Wrapper>
  );
};

export default Header;
