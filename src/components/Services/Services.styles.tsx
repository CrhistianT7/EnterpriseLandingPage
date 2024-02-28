import styled from "styled-components"
import { colors } from "styles/colors"
import Section from "ui/Section/Section"

export const ClientSection = styled(Section)`
  gap: 5rem;
`

export const ServicesTitle = styled.h2`
  font-size: 3rem;
  text-align: center;

  .span-point {
    color: ${colors.primary.main};
  }
`

export const CustomSingleWord = styled.b`
  color: ${colors.primary.main};
`

export const MobileView = styled.div`
  
`

export const DesktopView = styled.div`
  
`
