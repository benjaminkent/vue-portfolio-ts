export interface SocialMedia {
  class: string
  url: string
}

export interface CardInterface {
  id: number
  logoURL: string[]
  name: string
  description: string
  linkURL: string
}

export interface ProjectInterface {
  id: number
  name: string
  description: string
  linkURL: string
  linkName: string
  image: string
}