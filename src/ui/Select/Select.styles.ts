import styled from 'styled-components'
import { colors } from 'styles/colors'

interface ISelectOption {
  selected: boolean
}

export const StyledSelect = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  background: ${colors.primary.main};
  border: none;
  border-radius: 0.6rem;
  padding: 0.5rem 0.75rem;
  color: ${colors.white.main};
`

export const StyledSelectedValue = styled.div`
  display: flex;
  align-items: center;
`

export const StyledSelectOptions = styled.div`
  position: absolute;
  top: 3.75rem;
  right: 0;
  width: 12.5rem;
  border: none;
  color: ${colors.secondary.main};
  border: 0.0625rem solid ${colors.body};
  border-radius: 1rem;

  li:first-child {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }

  li:last-child {
    border: none;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
`

export const StyledSelectOption = styled.li<ISelectOption>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  cursor: pointer;
  padding: 1.25rem 1.5rem;
  background-color: ${colors.white.main};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  border-bottom: 0.125rem solid ${colors.body};

  &:hover {
    background: ${colors.secondary.hover};
    color: ${colors.white.main};
  }

  .point-selected {
    background-color: ${colors.gray[100]};
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    ${(props) =>
      props.selected &&
      `
        background: ${colors.primary.main};
        border: 0.25rem solid ${colors.gray[100]}
      `}
  }
`
