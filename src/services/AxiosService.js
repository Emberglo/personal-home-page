import Axios from 'axios'

export const imageApi = Axios.create({
    baseURL: 'https://api.unsplash.com/photos/random?orientation=landscape&client_id=PMvSGjzyrrelEBgst1Smy9BqnGuex1ExuMIG7Mio6Mg',
    timeout: 5000
})

export const quoteApi = Axios.create({
    baseURL: 'http://api.quotable.io/random',
    timeout: 5000
})

export const devApi = Axios.create({
    baseURL: 'https://dev.to/api/articles?per_page=10',
    timeout: 5000
})

export const weatherApi = Axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/weather?zip=83709,US&appid=97fdc58d5eaae49328bb3ec877b51086',
    timeout: 5000
})