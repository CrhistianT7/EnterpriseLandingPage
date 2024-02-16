import { useFormik } from 'formik'

import { validationSchema } from './FormContactUs.yup'
import useIntlMessages from 'hooks/useIntlMessages'
import Input from 'ui/input/Input'
import Textarea from 'ui/Textarea/Textarea'
import Button from 'ui/Button/Button'
import {
  TitleForm,
  Error,
  FormWrapper,
  ContainerForm,
} from './FormContactUs.styles'

interface IValues {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  message: string
}

const initialValues: IValues = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  message: '',
}

const FormContacUs: React.FC = () => {
  const intl = useIntlMessages()
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values))
    },
  })

  return (
    <ContainerForm>
      <TitleForm>{intl('contact.us.form.title')}</TitleForm>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <Input
          label={intl('contact.us.form.label.firstname')}
          type="text"
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.errors.firstName && formik.touched.firstName ? (
          <Error>{intl(formik.errors.firstName)}</Error>
        ) : null}
        <Input
          label={intl('contact.us.form.label.lastname')}
          type="text"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <Error>{intl(formik.errors.lastName)}</Error>
        ) : null}
        <Input
          label={intl('contact.us.form.label.email')}
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? (
          <Error>{intl(formik.errors.email)}</Error>
        ) : null}
        <Input
          label={intl('contact.us.form.label.company')}
          type="text"
          id="company"
          name="company"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.company}
        />
        {formik.errors.company && formik.touched.company ? (
          <Error>{intl(formik.errors.company)}</Error>
        ) : null}

        <Input
          label={intl('contact.us.form.label.phone')}
          type="text"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.errors.phone && formik.touched.phone ? (
          <Error>{intl(formik.errors.phone)}</Error>
        ) : null}
        <Textarea
          label={intl('contact.us.form.label.message')}
          name="message"
          id="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.errors.message && formik.touched.message ? (
          <Error>{intl(formik.errors.message)}</Error>
        ) : null}
        <Button type="primary">{intl('contact.us.form.button')}</Button>
      </FormWrapper>
    </ContainerForm>
  )
}

export default FormContacUs
