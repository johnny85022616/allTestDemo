import {createStore , compose , combineReducers, applyMiddleware} from 'redux';
import {counterReducer} from './reducers/counterReducer.js'
import {FormReducer} from './reducers/formResucer.js';
import {paginationReducer} from './reducers/paginationReducer.js'
import {userReducer} from './reducers/userReducer.js'
import thunk from 'redux-thunk';

//conbines
const allReducer = combineReducers({
    counterReducer,
    FormReducer,
    paginationReducer,
    userReducer
    })

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(allReducer ,composeEnhancer(applyMiddleware(thunk)));
