import { Wrapper, Name, Categories } from "./Header.styles.js";
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
