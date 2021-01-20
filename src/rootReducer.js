import {ASYNC_INC, DEC, INC} from "./types";
// export function rootReducer(state=0, action) {
export function rootReducer(state={counter:0}, action) {
    if (action.type === INC) {
        const newValue = state.counter +1;
        return {...state, counter:newValue}
    } else if (action.type === DEC) {
        const newValue = state.counter -1;
        return {...state, counter:newValue}
    } else if (action.type === ASYNC_INC){
        console.log("Async inc");
        const newValue = state.counter +1;
        return {...state, counter:newValue}
    }
    return state
}