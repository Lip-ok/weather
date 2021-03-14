import axios from "axios";


const apiKey = '6d0a337bbb74b67a43d5221b12fbc09d'
const instance = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5",
});

export const weatherAPI = {
    getWeather(city: string) {
        return instance.get(`/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(r => r.data)
    },
}