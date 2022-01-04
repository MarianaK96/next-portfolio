import * as React from "react";
import { AboutSection } from "components/organisms";
import { Wrapper } from "./LandingPage.styles";
import { Header, Footer } from "common_components/organisms";
import { AnimateTextIn } from "common_components/animations";

const LandingPage = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <AboutSection />
        {/* <AnimateTextIn title={`Mariana's Portfolio`} color={`#00000`} /> */}
        <Footer />
      </Wrapper>
    </>
  );
};

export default LandingPage;
