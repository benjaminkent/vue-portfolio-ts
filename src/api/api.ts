import axios from 'axios'
import { PostMessage } from '@/interfaces/interfaces'

export const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
})

export const loadWeatherData = (lat: number, long: number, key: string) => {
  return weatherApi.get(`/weather?lat=${lat}&lon=${long}&units=imperial&APPID=${key}`)
}

export const contactApi = axios.create({
  baseURL: `${process.env.VUE_APP_CONTACT_API}`,
})

export const localContactApi = axios.create({
  baseURL: 'http://localhost:3000',
})

export const loadMessages = () => {
  return contactApi.get('/messages')
}

export const deleteMessage = (id: number) => {
  contactApi.delete(`/messages/${id}`)
}

export const postMessage = (params: PostMessage) => {
  contactApi.post('/messages', params)
}
