import { breakpoints } from "shared/breakpoints";
import styled from "styled-components";

import Container from "ui/Container/Container";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  background: #ffdee4;
`

export const FooterWrapper = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
  font-size: 14px;
  width: 100%;
  align-items: flex-start;
  gap: 24px;

  @media only screen and (min-width: ${breakpoints.sm}) {
    font-size: 16px;
  }
`

export const FooterInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`

export const FooterLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .footer-logo {
    width: 179px;
    height: 38px;
  }
`

export const FooterInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .information-list {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
`

export const FooterSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .social-media {
    display: flex;
    gap: 8px;
  }
`

export const FooterLegal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 100%;

  .legal-item {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .legal-item:hover {
    color: rgb(210, 4, 39);
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    justify-content: center;
  }
`