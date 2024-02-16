import * as Yup from 'yup'

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(30, 'contact.us.form.input.firstname.validation')
    .required('validation.input.required.message'),
  lastName: Yup.string()
    .max(30, 'contact.us.form.input.lastname.validation')
    .required('validation.input.required.message'),
  email: Yup.string()
    .matches(
      /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/,
      'contact.us.form.input.email.validation'
    )
    .required('validation.input.required.message'),
  company: Yup.string()
    .max(30, 'contact.us.form.input.company.validation')
    .required('validation.input.required.message'),
  phone: Yup.string()
    .matches(/^[0-9+\-() ]+$/, 'contact.us.form.input.phone.validation')
    .required('validation.input.required.message'),
  message: Yup.string()
    .min(30, 'contact.us.form.input.message.validation')
    .required('validation.input.required.message'),
})
