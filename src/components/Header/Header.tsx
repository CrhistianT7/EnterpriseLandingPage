import LanguageSwitcher from "components/LanguageSwitcher/LanguageSwitcher";
import styled from "styled-components";
import Container from "ui/Container/Container";
import logo from "../../assets/images/logo/only-text.svg";
import Navbar from "../Navbar/Navbar";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0; // 32px
  z-index: 10;
  width: 100%;
  background: #FFDEE4;

  .asd {
    display: flex;
  }
`;

const HeaderWrapper = styled(Container)`
  flex-direction: row;
`

const LogoWrapper = styled.div``;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper size="lg">
        <LogoWrapper>
          <a href="/">
            <img src={logo} alt="Binland logo" />
          </a>
        </LogoWrapper>
        <div className="asd">
          <Navbar />
          <LanguageSwitcher />
        </div>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
