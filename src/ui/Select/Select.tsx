import { useEffect, useState } from 'react'
import { HiChevronUp, HiChevronDown } from 'react-icons/hi'
import useOutsideClick from '../../hooks/useClickOutside'
import {
  StyledSelect,
  StyledSelectedValue,
  StyledSelectOption,
  StyledSelectOptions,
} from './Select.styles'

interface RequiredProperties {
  id: string
  name: string
  value: string
}

interface ISelect {
  options: Array<RequiredProperties>
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  placeholder?: string
  selectedId?: string
  onChange: (value: string) => void
}

const Select: React.FC<ISelect> = ({
  options,
  icon,
  placeholder = 'Select one option',
  selectedId = '',
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<RequiredProperties>(
    {} as RequiredProperties
  )

  const refOptions = useOutsideClick(() => setIsOpen(false))

  const showOptions = (): void => {
    setIsOpen((prev) => !prev)
  }

  const handleOnChange = (value: string) => {
    onChange(value)
    setSelectedOption(options.filter((language) => language.value == value)[0])
  }

  useEffect(() => {
    if (selectedId) {
      setSelectedOption(
        options.filter((language) => language.id == selectedId)[0]
      )
    }
  }, [selectedId, options])

  return (
    <StyledSelect ref={refOptions} onClick={showOptions}>
      <StyledSelectedValue>
        {icon}
        <div className="selected-value">
          {Object.keys(selectedOption).length
            ? selectedOption.id.toUpperCase()
            : placeholder}
          {isOpen ? <HiChevronUp size={18} /> : <HiChevronDown size={18} />}
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
                  {language.id.toUpperCase()} - {language.name}
                  <div className="point-selected"></div>
                </StyledSelectOption>
              )
            })}
          </ul>
        </StyledSelectOptions>
      )}
    </StyledSelect>
  )
}

export default Select
