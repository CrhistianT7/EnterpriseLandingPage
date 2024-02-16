import { FaArrowRight } from 'react-icons/fa6'

import NotFoundImg from '../../assets/images/imgPageNotFound/PageNotFound.svg'
import { MessageWrapper, PageNotFoundWrapper } from './PageNotFound.style'
import ButtonLink from 'ui/ButtonLink/ButtonLink'

const PageNotFound = () => {
  return (
    <PageNotFoundWrapper size='lg'>
      <MessageWrapper>
        <h2 className="error-page-title">ups!</h2>
        <p className="error-page-sub-title">Creo que te extraviaste...</p>
      </MessageWrapper>
      <img src={NotFoundImg} alt="Page-Not-Found" className="not-found-img" />
      <ButtonLink to={'/'} type={'secondary'}>
        <p className="button-not-found">Regresar al Inicio</p>
        <FaArrowRight size={20} />
      </ButtonLink>
    </PageNotFoundWrapper>
  )
}

export default PageNotFound
