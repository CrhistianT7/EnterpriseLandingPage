import { useLanguageContext } from "context/Language/useLanguageContext";
import { languageOptions } from "context/Language/langConfig";
import Select from "ui/Select/Select";
import { IoLanguage } from "react-icons/io5";

const LanguageSwitcher: React.FC = () => {
  const { handleLanguage } = useLanguageContext();

  const handleLanguageSwith = (language: string) => {
    handleLanguage(language);
  };

  return <Select options={languageOptions} icon={<IoLanguage />} onChange={handleLanguageSwith}/>;
};

export default LanguageSwitcher;
