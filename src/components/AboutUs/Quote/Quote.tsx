import useIntlMessages from 'hooks/useIntlMessages'
import leftQuotationMark from './../../../assets/images/Quote/left-quotation-mark.svg'
import rightQuotationMark from './../../../assets/images/Quote/right-quotation-mark.svg'
import { StyledQuote } from './Quote.styles'

export const Quote = () => {
  const intl = useIntlMessages()

  return (
    <StyledQuote size="lg" type="padding">
      <div className="left-quotation-mark">
        <img src={leftQuotationMark} alt="left quotation mark" />
      </div>
      <p className="quote">{intl('about.us.quote.description')}</p>
      <div className="right-quotation-mark">
        <img src={rightQuotationMark} alt="right quotation mark" />
      </div>
    </StyledQuote>
  )
}

export default Quote
