import { Wrapper } from "./Footer.style";

const Footer = () => {
  return <Wrapper>{new Date().getFullYear()}</Wrapper>;
};

export default Footer;
