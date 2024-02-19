import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'
import { colors } from 'styles/colors'

export const ContainerDetails = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
  column-gap: 0.875rem;
  padding: 0 0.625rem;

  @media only screen and (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    height: 20.4rem;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    height: 20.4rem;
  }
`
export const ItemDetails = styled.div`
  /* height: 100%; */
  /* width: 150px; */
  height: 69px;
  padding: 0.625rem;
  border: 0.0625rem solid ${colors.white.disabled};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${colors.secondary.disabled};

  @media only screen and (min-width: ${breakpoints.md}) {
    height: 100%;
    width: 100%;
    /* width: 17.625rem;
    height: 13.75rem; */
    text-align: center;
  }
  @media only screen and (min-width: ${breakpoints.lg}) {
    height: 100%;
    width: 100%;
    /* width: 17.625rem;
    height: 13.75rem; */
    text-align: center;
  }

  &:nth-child(1) {
    /* grid-area: picture; */
    border-radius: 0.9375rem;
  }

  &:nth-child(2) {
    /* grid-area: clientes; */
    border-radius: 0.9375rem;
  }

  &:nth-child(3) {
    /* grid-area: colaboradores; */
    background-image: url('src/assets/images/imgAboutUs/edificio.jpeg');
    background-size: cover;
    border-radius: 0.9375rem;
  }

  &:nth-child(4) {
    /* grid-area: servicios; */
    border-radius: 0.9375rem;
  }
`
export const Statistics = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`
