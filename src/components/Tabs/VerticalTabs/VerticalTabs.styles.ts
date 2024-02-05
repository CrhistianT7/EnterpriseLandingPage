import styled from "styled-components"

import { colors } from "styles/colors"

export const VerticalTabsWrapper = styled.div`
  display: flex;
`

export const TabsWrapper = styled.ul`
  min-width: fit-content;
`

export const SingleTab = styled.li`
  list-style: none;
  color: ${colors.secondary.main};
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  cursor: pointer;

  &.selected {
    background: ${colors.body};
    color: ${colors.secondary.main};
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  height: 21.875rem;
  display: flex;
  flex-direction: column;
  background: ${colors.body};
  border-radius: 1rem;
  border-top-left-radius: 0;
  padding: 0.75rem;

  &:not(.top-left-rounded) {
    border-top-left-radius: 1rem;
  }
`
