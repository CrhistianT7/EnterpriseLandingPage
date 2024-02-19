import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const TextareaWrapper = styled.div`
  background-color: ${colors.gray[150]};
  padding: 1.5rem 1.75rem;
  border-radius: 0.375rem;
  height: 9.375rem;
`

export const TextareaLabel = styled.label`
  display: grid;
  width: 100%;
  grid-template-areas: 'textarea';
  padding-top: 0.5rem;

  > * {
    grid-area: textarea;
  }

  span {
    transform-origin: left;
    transition: transform 0.3s, color 0.3s;
    display: inline-block;
    color: ${colors.secondary.main};
  }

  textarea {
    margin-top: 0.5rem;
    height: 155%;
    border: none;
    outline: none;
    font: inherit;
    background: none;
    resize: none;
  }

  textarea:focus + span,
  textarea:not(:placeholder-shown) + span {
    color: ${colors.secondary.selected};
    transform: translate(0, -40%) scale(0.8);
    padding-bottom: 0.25rem;
  }
`
