import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'
import Container from 'ui/Container/Container'

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 72px;
  max-height: 72px;
  background: #ffdee4;

  position: sticky;
  top: 0;
  z-index: 10;
`

export const HeaderWrapper = styled(Container)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  position: relative;
  padding: 16px 16px;
  min-height: 72px;
`

export const HamburgerIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }
`

export const DesktopNavigation = styled.nav`
  display: none;

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`

export const DesktopUnorderedList = styled.ul`
  display: flex;
  gap: 0.5rem;
`

export const MobileNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  border-top: 2px solid red;
  width: 100%;
  padding: 0.75rem;
  background: #ffdee4;

  transition: display 5s linear;

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }
`
// export const HeaderEmptyBackground = styled.div`
//   height: 72px;
// `
