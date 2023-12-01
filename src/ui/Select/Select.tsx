import { useState } from "react";
import { ILanguageOptions } from "context/Language/langConfig";
import { useLanguageContext } from "context/Language/useLanguageContext";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import useOutsideClick from "hooks/useClickOutside";
import {
  StyledSelect,
  StyledSelectedValue,
  StyledSelectOption,
  StyledSelectOptions,
} from "./Select.styles";

interface ISelect {
  options: ILanguageOptions;
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  onChange: (value: string) => void;
}

const Select: React.FC<ISelect> = ({
  options,
  icon,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { language } = useLanguageContext();
  const refOptions = useOutsideClick(() => setIsOpen(false));

  const showOptions = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledSelect ref={refOptions} onClick={showOptions}>
      <StyledSelectedValue>
        {icon}
        <div className="selected-value">
          {options[language.locale].name}
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </StyledSelectedValue>
      {isOpen && (
        <StyledSelectOptions>
          <ul>
            {Object.keys(options).map((lan) => {
              return (
                <StyledSelectOption
                  key={lan}
                  onClick={() => onChange(options[lan].value)}
                  selected={language.locale === lan}
                >
                  {options[lan].name}
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
