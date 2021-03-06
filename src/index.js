import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Counter from './counter/counter'
// import Transformation from './transFormation/transFormation';
import * as serviceWorker from './serviceWorker';
import styled from '@emotion/styled'
import { Provider } from 'react-redux';
import {store} from './store.js'
import {Form} from './nameList/nameList';




// const counters = Array.from({ length: 5 }, (_, index) => index); 

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* {counters.map((eachElement)=>(<Counter/>))} */}
    {/* <Transformation/>   */}
  <Form/>
  </Provider>,  
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
