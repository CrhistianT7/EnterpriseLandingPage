import styled from 'styled-components'
import { colors } from 'styles/colors'

interface ISelectOption {
  selected: boolean
}

export const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  background: ${colors.primary.main};
  border: none;
  border-radius: 0.9rem;
  padding: 0.75rem;
  color: ${colors.white.main};
`

export const StyledSelectedValue = styled.div`
  display: flex;
  align-items: center;

  .selected-value {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    width: -webkit-fill-available;
  }
`

export const StyledSelectOptions = styled.div`
  position: absolute;
  top: 3.75rem;
  right: 0;
  width: 200px;
  border: none;
  color: ${colors.secondary.main};

  li:first-child {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }

  li:last-child {
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
  margin-top: 1px;
  background-color: ${colors.white.main};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;

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
        border: 4px solid ${colors.gray[100]}
      `}
  }
`
