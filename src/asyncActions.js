import Api from "./api";
import {getWeatherFailure, getWeatherStarted, getWeatherSuccess, increment} from "./actions";

export function asyncInc(){
    return function (dispatch){
        setTimeout(()=>{dispatch(increment())},3000);
    }
}

export function asyncWeather(city){
    return async function (dispatch){
        dispatch(getWeatherStarted());
        try{
            console.log(city);
            const json = await Api.getCityCurrent(city, "c3bd24f13cecf13f96cfdc182bc8d4e8");
            dispatch(getWeatherSuccess(json));
        } catch(e){
            dispatch(getWeatherFailure(e));
        }
        /*
                setTimeout(()=>{
                    dispatch({type:ASYNC_INC})
                },1500);
        */

    }
}