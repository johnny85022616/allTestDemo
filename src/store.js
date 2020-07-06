import {createStore , compose , combineReducers} from 'redux';
import {counterReducer} from './reducers/counterReducer.js'
import {FormReducer} from './reducers/formResucer.js';

//conbine reducers
const allReducer = combineReducers({
    counterReducer,
    FormReducer
    })

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(allReducer , composeEnhancer());