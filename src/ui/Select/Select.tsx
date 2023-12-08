import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import useOutsideClick from "../../hooks/useClickOutside"
import {
  StyledSelect,
  StyledSelectedValue,
  StyledSelectOption,
  StyledSelectOptions,
} from "./Select.styles";

interface RequiredProperties {
  id: string;
  name: string;
  value: string;
}

interface ISelect {
  options: Array<RequiredProperties>;
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  placeholder?: string;
  selectedId?: string;
  onChange: (value: string) => void;
}

const Select: React.FC<ISelect> = ({
  options,
  icon,
  placeholder = "Select one option",
  selectedId = "",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<RequiredProperties>(
    {} as RequiredProperties
  );

  const refOptions = useOutsideClick(() => setIsOpen(false));
  const currentLanguage = options.filter((lan) => lan.id == language.locale)[0];

  const showOptions = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleOnChange = (value: string) => {
    onChange(value);
    setSelectedOption(options.filter((language) => language.value == value)[0]);
  };

  useEffect(() => {
    if (selectedId) {
      setSelectedOption(
        options.filter((language) => language.id == selectedId)[0]
      );
    }
  }, [selectedId, options]);

  return (
    <StyledSelect ref={refOptions} onClick={showOptions}>
      <StyledSelectedValue>
        {icon}
        <div className="selected-value">
          {Object.keys(selectedOption).length
            ? selectedOption.name
            : placeholder}
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </StyledSelectedValue>
      {isOpen && (
        <StyledSelectOptions>
          <ul>
            {options.map((language) => {
              return (
                <StyledSelectOption
                  key={language.id}
                  onClick={() => handleOnChange(language.value)}
                  selected={selectedOption.id === language.id}
                >
                  {language.name}
                </StyledSelectOption>
              );
            })}
          </ul>
        </StyledSelectOptions>
      )}
    </StyledSelect>
  );
};

export default Select;
