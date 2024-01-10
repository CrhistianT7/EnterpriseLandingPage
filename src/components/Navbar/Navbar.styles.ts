import styled from "styled-components";
import Container from "ui/Container/Container";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #ffdee4;

  position: fixed;
  top: 0;
  z-index: 10;
`

export const HeaderWrapper = styled(Container)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  position: relative;
  padding: 16px 16px;
`
