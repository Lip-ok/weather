import {CLEAR_INPUT, GET_WEATHER} from "./type";
import {Dispatch} from "redux";
import { weatherAPI } from "../api/api";
import {AxiosResponse} from "axios";
import {dateСonversion} from "../helpers/timeConverter";

const initialState = {
    products: [],
    id: 0,
    inputValue: ''
}

const weatherReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case GET_WEATHER: {
           return {
               ...state,
               products: [
                   ...state.products,
                   {
                       id: state.id++,
                       // time: dateСonversion(action.weather.timezone),
                       time: dateСonversion(action.weather.dt),
                       temperature: Math.floor(action.weather.main.temp),
                       humidity:action.weather.main.humidity
                   }]
           }
        }
        case CLEAR_INPUT: {
            console.log(action.val)
            return {
                ...state,
                inputValue: action.val
            }
        }
        default:
            return state;
    }
}


export const getWeatherAction = (weather: AxiosResponse<any>) => ({type: GET_WEATHER, weather});
export const clearInputAction = (val:string) => ({type: CLEAR_INPUT, val});


export const getWeather = (city:string) =>(dispatch:Dispatch)=>{
    weatherAPI.getWeather(city).then((response) => {
        dispatch(getWeatherAction(response))
    })
}


export default weatherReducer;