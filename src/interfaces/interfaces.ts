export interface SocialMedia {
  class: string[]
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

export interface MessageInterface {
  firstName: string
  lastName: string
  email: string
  messageText: string
}

export interface FetchedMessageInterface {
  id: number
  firstName: string
  lastName: string
  email: string
  messageText: string
}

export interface PostMessage {
  first_name: string
  last_name: string
  email: string
  message_text: string
}

export interface WeatherDataInterface {
  city: string
  temp: number
  condition: string
  icon: string
}
