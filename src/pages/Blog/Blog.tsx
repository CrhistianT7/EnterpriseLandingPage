import { useState } from 'react'

import Section from 'ui/Section/Section'
import { BlogHero, BlogWrapper, SubscribeWrapper } from './Blog.styles'
import subscribeImg from './../../assets/images/imgBlog/subscribe.svg'
import Button from 'ui/Button/Button'
import Input from 'ui/input/Input'

const Blog: React.FC = () => {
  const [value, setValue] = useState('')
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
      <Section type="margin" size="sm">
        <SubscribeWrapper size="lg" isfullwidth>
          <div className="subscribe-content">
            <div>
              <h2 className="subscribe-title">Suscríbete</h2>
              <p className="subscribe-description">
                ¿ Deseas estar mas pendiente de más artículos ?
              </p>
            </div>
            <div className="subscribe-form">
              <Input
                type="email"
                id="email"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Tu e-mail"
                className="subscribe-input"
              />
              <Button
                type="primary"
                size="lg"
                className="subscribe-button"
                onClick={() => console.log(value)}
              >
                Suscríbete
              </Button>
            </div>
          </div>
          <img src={subscribeImg} className="subscribe-img" />
        </SubscribeWrapper>
      </Section>
    </BlogWrapper>
  )
}

export default Blog
