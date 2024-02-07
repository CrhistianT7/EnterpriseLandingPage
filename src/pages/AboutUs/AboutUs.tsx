import Container from 'ui/Container/Container'
import Quote from 'components/AboutUs/Quote/Quote'
import BinlandInformation from 'components/AboutUs/BinlandInformation/BinlandInformation'
import Founders from 'components/AboutUs/Founders/Founders'
import Office from 'components/AboutUs/Offices/Office'

const AboutUs = () => {
  return (
    <Container size="lg" isfullwidth>
      <Quote />
      <BinlandInformation />
      <Founders />
      <Office />
    </Container>
  )
}

export default AboutUs
