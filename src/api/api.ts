import axios from 'axios'

export const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5'
})

export const loadWeatherData = (lat: number, long: number, key: string) => {
  return weatherApi.get(`/weather?lat=${lat}&lon=${long}&units=imperial&APPID=${key}`)
}

export const contactApi = axios.create({
  baseURL: 'https://morning-stream-79145.herokuapp.com'
})

export const loadMessages = () => {
  return contactApi.get('/messages')
}

export const deleteMessage = (id: number ) => {
  contactApi.delete(`/messages/${id}`)
}
