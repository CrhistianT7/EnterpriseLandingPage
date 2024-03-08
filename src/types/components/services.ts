export interface IHeroPropsTitle {
  id: string
  serviceName: string
  serviceSubTitle: string
  serviceDescription: string
}

export interface IQuestionProps {
  questionService: string
  responseService: string
}

export interface TabInfo {
  id: number
  label: string
  info: string
}

export interface ITechnologies {
  name: string
  image: any
  service: string
}
