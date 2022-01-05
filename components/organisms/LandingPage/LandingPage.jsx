import * as React from "react";
import { AboutSection } from "components/organisms";
import { Wrapper } from "./LandingPage.styles";
import { Header, Footer } from "common_components/organisms";

const LandingPage = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <AboutSection />
        <Footer />
      </Wrapper>
    </>
  );
};

export default LandingPage;
