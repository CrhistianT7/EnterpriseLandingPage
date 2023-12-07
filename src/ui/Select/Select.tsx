import { useState } from "react";
import { ILanguagaConfiguration } from "context/Language/langConfig";
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

// interface RequiredProperties {
//   id: string;
//   name: string;
//   value: string;
// }

interface ISelect {
  options: ILanguagaConfiguration[];
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  placeholder?: string;
  selected?: string;
  onChange: (value: string) => void;
}

const Select: React.FC<ISelect> = ({
  options,
  icon,
  placeholder = "Select one option",
  selected = '',
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { language } = useLanguageContext();
  const refOptions = useOutsideClick(() => setIsOpen(false));
  const currentLanguage = options.filter((lan) => lan.id == language.locale)[0];

  const showOptions = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledSelect ref={refOptions} onClick={showOptions}>
      <StyledSelectedValue>
        {icon}
        <div className="selected-value">
          {selected ? placeholder : currentLanguage.name}
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </StyledSelectedValue>
      {isOpen && (
        <StyledSelectOptions>
          <ul>
            {options.map((lan) => {
              return (
                <StyledSelectOption
                  key={lan.id}
                  onClick={() => onChange(lan.value)}
                  selected={language.locale === lan.id}
                >
                  {lan.name}
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
