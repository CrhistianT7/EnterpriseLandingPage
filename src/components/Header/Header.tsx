import styled from "styled-components";
import Container from "ui/Container/Container";
import logo from "../../assets/images/logo/only-logo.svg";
import Navbar from "../Navbar/Navbar";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0; // 32px
  z-index: 10;
  width: 100%;
  background: #ffdee4;
  padding: 16px 0;
`;

const LogoWrapper = styled.div``;

const HeaderWrapper = styled(Container)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper className="asd" size="lg">
        <LogoWrapper>
          <a href="/">
            <img src={logo} alt="Binland logo" />
          </a>
        </LogoWrapper>
        <Navbar />
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
