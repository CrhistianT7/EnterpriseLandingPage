import styled from 'styled-components'
import { colors } from 'styles/colors'

export const ContainerDetails = styled.div`
  width: 100%;
  height: 20.4rem;
  display: grid;
  grid-template-areas:
    ' clientes colaboradores colaboradores'
    'picture  picture servicios';
  grid-template-rows: auto;
  grid-template-columns: auto auto;
  row-gap: 1.25rem;
  column-gap: 0.875;
  padding: 0 0.625rem;
`
export const ItemDetails = styled.div`
  height: 100%;
  padding: 0.625rem;
  border: 0.0625rem solid ${colors.white.disabled};
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:nth-child(1) {
    grid-area: picture;
    background-image: url('src/assets/images/imgAboutUs/edificio.jpeg');
    background-size: cover;
    border-radius: 0.9375rem;
    margin-right: 0.625rem;
  }

  &:nth-child(2) {
    grid-area: clientes;
    border-radius: 0.9375rem;
  }

  &:nth-child(3) {
    grid-area: colaboradores;
    border-radius: 0.9375rem;
  }

  &:nth-child(4) {
    grid-area: servicios;
    border-radius: 0.9375rem;
  }
`
export const Statistics = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`
