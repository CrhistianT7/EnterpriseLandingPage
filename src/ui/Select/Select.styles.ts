import styled from "styled-components";

interface ISelectOption {
  selected: boolean;
}

export const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  background: #fff;

  border: 1px solid #d20427;
  border-radius: 6px;
  padding: 8px 12px;
  line-height: 100%;
  color: #d20427;
  min-width: 150px;
`;

export const StyledSelectedValue = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  .selected-value {
    display: flex;
    justify-content: space-between;
    width: -webkit-fill-available;
  }
`;

export const StyledSelectOptions = styled.div`
    position: absolute;
    top: 40px;
    left: 0;
    width: 150px;

    background: #fff;
    border: 1px solid #d20427;
    border-radius: 6px;
    padding: 6px 6px;
`

export const StyledSelectOption = styled.li<ISelectOption>`
  list-style-type: none;
  cursor: pointer;
  padding: 4px 4px;
  border-radius: 6px;

  &:hover {
    background: #f80a32;
    color: white;
  }

  ${(props) => (props.selected ? `background: #ffdee4;` : "")}
`;
