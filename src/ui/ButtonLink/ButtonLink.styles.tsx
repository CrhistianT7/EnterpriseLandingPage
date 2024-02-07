import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CustonNavLink = styled(NavLink)`
  text-decoration: none;
  width: fit-content;

  &:focus {
    outline: none;
    outline: 2px solid red;
    border-radius: 0.6rem;
  }
`
