import Section from 'ui/Section/Section'
import { BlogHero, BlogWrapper } from './Blog.styles'

const Blog: React.FC = () => {
  return (
    <BlogWrapper size="xl" isfullwidth>
      <Section size="sm" type="margin">
        <BlogHero>
          <h1 className="hero__title">blog</h1>
        </BlogHero>
      </Section>
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
    </BlogWrapper>
  )
}

export default Blog
