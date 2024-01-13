import { Route, Routes } from 'react-router-dom'

import Layout from 'components/Layout/Layout'
import AboutUs from 'pages/AboutUs/AboutUs'
import ContactUs from 'pages/ContactUs/ContactUs'
import Home from 'pages/Home/Home'
import PageNotFound from 'pages/PageNotFound/PageNotFound'
import PrivacyPolicy from 'pages/PrivacyPolicy/PrivacyPolicy'
import TermsOfService from 'pages/TermsOfService/TermsOfService'

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
