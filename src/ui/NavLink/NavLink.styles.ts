import styled, { keyframes } from "styled-components";

import { colors } from "styles/colors";

export const StyledListItem = styled.li`
  list-style-type: none;
  padding: .25rem .25rem;
`;

const borderBottomAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const StyledAnchor = styled.a`
  color: ${colors.primary.body};
  text-decoration: none;
  font-size: 16px;

  &:hover {
    border-bottom: 2px solid #d20427;
    border-radius: 2px;
    animation: ${borderBottomAnimation} 2s linear infinite;
  }

  &:active, &:focus {
    outline: 1px solid #d20427;
    border-radius: 6px;
    padding: 0 10px;
  }
`;
