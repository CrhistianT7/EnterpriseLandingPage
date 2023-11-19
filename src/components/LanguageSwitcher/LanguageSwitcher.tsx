import { GrLanguage } from "react-icons/gr";
import { useLanguageContext } from "context/Language/useLanguageContext";
import { languageOptions } from "context/Language/langConfig";
import { StyledLanguageSwitcher } from "./LanguageSwitcher.styles";

const LanguageSwitcher: React.FC = () => {
  const { language, handleLanguage } = useLanguageContext();

  const onHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    handleLanguage(event.target.value);

  return (
    <StyledLanguageSwitcher>
      <label htmlFor="language">
        <GrLanguage />
      </label>
      <select onChange={onHandleChange}>
        {Object.keys(languageOptions).map((lan) => {
          return (
            <option
              key={lan}
              value={languageOptions[lan].value}
              selected={language.locale == lan}
            >
              {languageOptions[lan].name}
            </option>
          );
        })}
      </select>
    </StyledLanguageSwitcher>
  );
};

export default LanguageSwitcher;
