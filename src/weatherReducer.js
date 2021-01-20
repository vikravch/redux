// define initial state of user
import {GET_WEATHER_FAILURE, GET_WEATHER_STARTED, GET_WEATHER_SUCCESS} from "./types";

const initialState = {
    data: null,
    loading: false,
    error: null
}

// update store based on type and payload and return the state
export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case GET_WEATHER_STARTED:
            return {
                ...state,
                loading: true
            }
        case GET_WEATHER_SUCCESS:
            const { data } = action.payload;
            return {
                ...state,
                data,
                loading: false
            }
        case GET_WEATHER_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                error
            }
        default:
            return state
    }
}