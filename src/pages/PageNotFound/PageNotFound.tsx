import { FaArrowRight } from 'react-icons/fa6'

import NotFound from '../../assets/images/imgPageNotFound/PageNotFound.svg'
import {
  ButtonPageNotFound,
  ContentExclamation,
  Exclamation,
  WrapperPageNotFound,
  Text,
} from './PageNotFound.style'

const PageNotFound = () => {
  return (
    <WrapperPageNotFound>
      <ContentExclamation>
        <Exclamation>ups!</Exclamation>
        <Text>Creo que te extraviaste...</Text>
      </ContentExclamation>
      <img src={NotFound} alt="Page-Not-Found" className="not-found-img" />
      <ButtonPageNotFound to={'/'} type={'secondary'} size={'md'}>
        Regresar al Inicio <FaArrowRight />
      </ButtonPageNotFound>
    </WrapperPageNotFound>
  )
}

export default PageNotFound
