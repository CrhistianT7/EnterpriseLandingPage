import Container from 'ui/Container/Container'

const Services: React.FC = () => {
  return (
    <Container size="lg">
      <h3>Services</h3>
      <div>
        <div>
          <h3>Design</h3>
          <ul>
            <li>Development of graphic pieces</li>
            <li>Branding</li>
            <li>UX/UI Design</li>
            <li>UX Writing</li>
          </ul>
        </div>
        <div>
          <h3>Web development</h3>
          <ul>
            <li>Full stack applications (revisar)</li>
            <li>Multiplataforma applicaciones</li>
            <li>
              Mobile Development -<span> iOS, Android, Flutter</span>
            </li>
            <li>E-commerce</li>
            <li>Cloud migrations and infraestructure</li>
          </ul>
        </div>
        <div>
          <h3>Digital staff</h3>
          <ul>
            <li>SEO Optimization/ SEM</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Services
