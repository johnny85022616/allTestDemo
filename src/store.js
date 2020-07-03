import {createStore , compose} from 'redux';
import {counterReducer} from './reducers/counterReducer.js'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(counterReducer , composeEnhancer());