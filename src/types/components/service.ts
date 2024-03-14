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
  key: string
  image: string
}

/** Do not touch bellow here */

export interface IServiceFeature {
  icon: React.ReactNode
  title: string
  description: string
}

export interface IWhyService {
  question: string
  answer: string
  image: string
}

export interface IServiceDevelopmentStep {
  title: string
  description: string
}

export interface IDevelopmentProcess {
  question: string
  description: string
  steps: Array<IServiceDevelopmentStep>
}

export interface IDeliverableItem {
  id: string
  name: string
}

export interface IDeliverable {
  question: string
  description: string
  items: Array<IDeliverableItem>
}

export interface ITechStack {
  title: string
  description: string
  image: string
}

export interface IServiceHero {
  id: string
  name: string
  description: string
  phraseQuote: string
}
export interface IService extends IServiceHero {
  // id: string
  // name: string
  // description: string
  // phraseQuote: string
  features: Array<IServiceFeature>
  whyService: IWhyService
  developmentProcess: IDevelopmentProcess
  deliverables: IDeliverable
  techStack: ITechStack
}
