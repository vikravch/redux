import {ASYNC_INC, DEC, GET_WEATHER_FAILURE, GET_WEATHER_STARTED, GET_WEATHER_SUCCESS, INC, INIT_APP} from "./types";
import Api from "./api";

export function increment(){
    return {
        type:INC
    }
}

export function decrement(){
    return {
        type:DEC
    }
}

export function initApp(){
    return {
        type:INIT_APP
    }
}

export const getWeatherStarted = () => {
    return {
        type: GET_WEATHER_STARTED
    }
}

// to get the list of users - success
export const getWeatherSuccess = data => {
    return {
        type: GET_WEATHER_SUCCESS,
        payload: {
            data
        }
    }
}

// to get the list of users - failure
export const getWeatherFailure = error => {
    return {
        type: GET_WEATHER_FAILURE,
        payload: {
            error
        }
    }
}