import React from "react";
import styled from "styled-components";
import useIntlMessages from "../../hooks/useIntlMessages";

const StyledHero = styled.section`
  height: 100vh;
`

const Hero: React.FC = (): React.ReactElement => {
  const intl = useIntlMessages();
  return (
    <StyledHero id="hero">
      {intl("home.navbar.link.about.us")}
    </StyledHero>
  );
};

export default Hero;
