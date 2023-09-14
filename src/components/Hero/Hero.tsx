import React from "react";
import useIntlMessages from "../../hooks/useIntlMessages";

const Hero: React.FC = (): React.ReactElement => {
  const intl = useIntlMessages();
  return (
    <section>
      {intl("home.navbar.link.about.us")}
    </section>
  );
};

export default Hero;
