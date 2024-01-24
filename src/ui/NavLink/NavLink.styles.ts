import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'

import { colors } from 'styles/colors'

export const StyledListItem = styled.li`
  list-style-type: none;
`

export const StyledAnchor = styled.a`
  color: ${colors.secondary.main};
  text-decoration: none;
  font-size: 14px;
  padding: 0.25rem 0.25rem;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #d20427;
    border-radius: 2px;
  }

  &:active,
  &:focus {
    outline: 1px solid #d20427;
    border-radius: 6px;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 16px;
  }
`
