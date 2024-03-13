import Container from 'ui/Container/Container'

const Blog: React.FC = () => {
  return (
    <Container size="xl">
      <div>
        <h1>BLOG</h1>
      </div>
      <div>
        <input type="search" />
        {/*questionable if the search will be performed within the component pagination */}
      </div>
      <div>Pagination component</div>
      <div>
        <div>
          <h2>Suscríbete</h2>
          <p>deseas estar mas pendiente de más articulos</p>
          <div>
            <input type="email" />
            <button>Suscríbete</button>
          </div>
        </div>
        <div>img suscríbete</div>
      </div>
    </Container>
  )
}

export default Blog
