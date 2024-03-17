import styled from 'styled-components'

import heroImg from './../../assets/images/ClientsPage/mockup-ui-chat.webp'
import { colors } from 'styles/colors'
import { breakpoints } from 'shared/breakpoints'
import Container from 'ui/Container/Container'

export const BlogWrapper = styled(Container)`
  margin: 0 auto;
`

export const BlogHero = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.95) 25%,
      rgba(0, 0, 0, 0.1) 75%
    ),
    url(${heroImg});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1rem;
  width: 100%;
  height: 12.125rem;
  color: ${colors.white.main};
  display: grid;
  place-content: center;

  .hero__title {
    font-weight: 700;
    font-size: 3rem;
    line-height: 5rem;
    text-align: center;
    text-transform: uppercase;

    @media only screen and (min-width: ${breakpoints.xs}) {
      font-size: 4rem;
    }

    @media only screen and (min-width: ${breakpoints.sm}) {
      font-size: 5rem;
      line-height: 7.5rem;
    }
  }
`

export const SubscribeWrapper = styled(Container)`
  background-color: ${colors.secondary.main};
  color: ${colors.white.main};
  justify-content: space-between;
  border-radius: 0.5rem;
  padding: 1rem 1rem 0 1rem;
  gap: 2rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    padding: 0 2rem 0 3rem;
  }

  .subscribe-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .subscribe-title {
      font-size: 2rem;
      font-weight: 600;
      line-height: 3rem;
    }

    .subscribe-description {
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.6875rem;
    }
  }

  .subscribe-form {
    background-color: ${colors.white.main};
    border-radius: 0.5rem;
    padding: 0.11rem 0.25rem;
    display: flex;
    align-items: center;

    .subscribe-input {
      background: none;
      outline: none;
      border: none;
      flex-grow: 1;
      padding: 0.85rem 1rem;
    }

    .subscribe-input .input {
      margin-top: 0;
    }

    .subscribe-button {
      border-radius: 0.5rem;
      padding: 1rem 1.5rem;
    }
  }

  .subscribe-img {
    height: auto;
    width: fit-content;
  }
`
