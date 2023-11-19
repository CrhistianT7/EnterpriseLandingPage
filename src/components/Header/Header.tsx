import LanguageSwitcher from "components/LanguageSwitcher/LanguageSwitcher";
import styled from "styled-components";
import logo from "../../assets/images/logo/only-text.svg";
import Navbar from "../Navbar/Navbar";

const StyledHeader = styled.header`
  display: flex;
`;

const LogoWrapper = styled.div``;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <LogoWrapper>
          <a href="/">
            <img src={logo} alt="Binland logo" />
          </a>
        </LogoWrapper>
      </div>
      <Navbar />
      <div>
        <LanguageSwitcher />
      </div>
    </StyledHeader>
  );
};

export default Header;
