import useIntlMessages from 'hooks/useIntlMessages'
import comilla1 from './../../../assets/images/Quote/Comilla1.svg'
import comilla2 from './../../../assets/images/Quote/comilla2.svg'
import {
  AboutUsQuote,
  ComillaDerecha,
  ComillaIzquierda,
  OurSlogan,
} from './Quote.styles'

export const Quote = () => {
  const intl = useIntlMessages()

  return (
    <OurSlogan>
      <AboutUsQuote>
        <ComillaIzquierda>
          <img src={comilla2} />
        </ComillaIzquierda>
        {intl('about.us.quote.description')}
        <ComillaDerecha>
          <img src={comilla1} />
        </ComillaDerecha>
      </AboutUsQuote>
    </OurSlogan>
  )
}

export default Quote
