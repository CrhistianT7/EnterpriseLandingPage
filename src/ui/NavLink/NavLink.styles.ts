import styled from "styled-components";

import { colors } from "styles/colors";

export const StyledListItem = styled.li`
  list-style-type: none;
`;

export const StyledAnchor = styled.a`
  color: ${colors.primary.body};
  text-decoration: none;
  font-size: 16px;
  padding: .25rem .25rem;

  &:hover {
    border-bottom: 2px solid #d20427;
    border-radius: 2px;
  }

  &:active, &:focus {
    outline: 1px solid #d20427;
    border-radius: 6px;
  }
`;
