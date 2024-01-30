import { TbExternalLink } from 'react-icons/tb'
import styled from 'styled-components'

import Container from 'ui/Container/Container'
// import Button from 'ui/Button/Button'
import ButtonLink from 'ui/ButtonLink/ButtonLink'
import { colors } from 'styles/colors'
import { breakpoints } from 'shared/breakpoints'
import Google from './../../assets/images/brandings/google.svg'
import Github from './../../assets/images/brandings/github.svg'
import Windows from './../../assets/images/brandings/windows.svg'
import Amazon from './../../assets/images/brandings/amazon.svg'
import Meta from './../../assets/images/brandings/meta.svg'

const StyledClientsSection = styled.section`
  box-shadow: 0px 0px 20px 0px rgba(30, 26, 26, 0.5);
  background-color: ${colors.white.main};
  width: 100vw;
`
const ClientsSectionWrapper = styled(Container)`
  padding: 112px 16px 99px;

  @media only screen and (min-width: ${breakpoints.sm}) {
    padding: 2rem 1rem;
    /* padding: 3rem 1rem 2.5rem; */
  }
`
const ClientSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  @media only screen and (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    justify-content: space-between;
  }
`
const TitleAndButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  h2 {
    //change to class
    font-weight: 600;
    font-size: clamp(2rem, 3.1vw, 3rem);
    line-height: normal;
    color: ${colors.secondary};
  }
  .span-point {
    color: ${colors.primary.main};
  }
  button {
    align-self: center;
    @media only screen and (min-width: ${breakpoints.sm}) {
      align-self: flex-start;
    }
  }

  @media only screen and (min-width: ${breakpoints.sm}) {
    gap: 2rem;
  }
`
const BrandingsWrapper = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  gap: 30px 60px;
  flex-wrap: wrap;
  img {
    width: 100px;
    height: auto;
    opacity: 0.5;
  }
  @media only screen and (min-width: ${breakpoints.sm}) {
    gap: 50px 100px;
    align-content: center;
  }
`

const ClientSection = () => {
  return (
    <StyledClientsSection>
      <ClientsSectionWrapper size="lg">
        <ClientSectionContent>
          <TitleAndButtonSection>
            <h2>
              Quienes confian en nosotros<span className="span-point">.</span>
            </h2>
            <ButtonLink type="secondary" to="">
              Ver más
              <TbExternalLink size={25} />
            </ButtonLink>
          </TitleAndButtonSection>
          <BrandingsWrapper>
            <img src={Meta} />
            <img src={Amazon} />
            <img src={Github} />
            <img src={Google} />
            <img src={Windows} />
          </BrandingsWrapper>
        </ClientSectionContent>
      </ClientsSectionWrapper>
    </StyledClientsSection>
  )
}

export default ClientSection
