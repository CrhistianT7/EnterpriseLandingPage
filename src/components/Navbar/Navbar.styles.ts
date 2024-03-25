import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'
import Container from 'ui/Container/Container'

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  max-height: 4.5rem;
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
  padding: 1rem 1rem;
  min-height: 4.5rem;
`

export const HamburgerIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }
`

export const DesktopNavigation = styled.nav`
  display: none;

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: flex;
    gap: 0.625rem;
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
  border-top: 0.125rem solid red;
  width: 100%;
  padding: 0.75rem;
  background: #ffdee4;

  transition: display 5s linear;

  @media only screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }
`
// export const HeaderEmptyBackground = styled.div`
//   height: 72rem;
// `
