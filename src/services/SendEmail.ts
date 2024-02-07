import axios from 'axios'

// const SERVICE_ID = 'service_30fre8b'
// const TEMPLATE_ID = 'template_rr5zmij'
// const PUBLIC_KEY = 'XKkupy_QmsZZ3I4Hk'

interface IEmailData {
  fullName: string
  email: string
  country: string
  message: string
  services: string
}

export const sendEmail = async (data: IEmailData) => {
  const parsedData = {
    from_name: data.fullName,
    from_email: data.email,
    to_name: 'Binland',
    message: data.message,
    from_country: data.country,
    from_services: data.services,
  }

  const emailServiceConfig = {
    service_id: import.meta.env.VITE_REACT_APP_SERVICE_ID,
    template_id: import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
    user_id: import.meta.env.VITE_REACT_APP_PUBLIC_KEY,
    template_params: parsedData,
  }

  try {
    const response = await axios.post(
      'https://api.emailjs.com/api/v1.0/email/send',
      emailServiceConfig
    )
    console.log('Successful', response.data)
  } catch (error) {
    console.log('Error', error)
  }
}
