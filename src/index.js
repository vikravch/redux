//import {createStore} from "./createStore";
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import {rootReducer} from "./rootReducer";
import {DEC, INC} from "./types";
import {decrement, increment, initApp} from "./actions";
import {asyncInc, asyncWeather} from "./asyncActions";

import {composeWithDevTools} from "redux-devtools-extension";
import weatherReducer from "./weatherReducer";

const counterTxt = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const addAsyncBtn = document.getElementById('addAsync');

const getWeatherBtn = document.getElementById('getWeather');
const cityTxt = document.getElementById('cityText');

/*
let state = {count:0};

function render(){
    counterTxt.textContent = state.count.toString();
}

addBtn.addEventListener('click',()=>{
    state.count++;
    render();
});

subBtn.addEventListener('click',()=>{
    state.count--;
    render();
});

render();*/

/*const store = createStore(rootReducer,0);

addBtn.addEventListener('click',()=>{
    console.log("Click inc");
    store.dispatch({type:"INC"});
});

subBtn.addEventListener('click',()=>{
    store.dispatch({type:"DEC"});
});

store.subscribe(()=>{
    const state = store.getState()
    counterTxt.textContent = state.toString();
});

store.dispatch({type:"INIT_APP"});*/
const reducers = combineReducers(
    {counts:rootReducer,
        weather:weatherReducer}
)

const store = createStore(reducers,
    {counter:0},
    composeWithDevTools(applyMiddleware(thunk)));

addBtn.addEventListener('click',()=>{
    console.log("Click inc");
    store.dispatch(increment());
});

subBtn.addEventListener('click',()=>{
    store.dispatch(decrement());
});

addAsyncBtn.addEventListener('click',()=>{
    store.dispatch(asyncInc());
});

getWeatherBtn.addEventListener('click',()=>{
    const city = cityTxt.value;
    store.dispatch(asyncWeather(city));
});

store.subscribe(()=>{
    const state = store.getState();
    counterTxt.textContent = state.counts.counter.toString();
});

store.dispatch(initApp());