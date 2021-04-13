import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Counter from './counter/counter'
// import Transformation from './transFormation/transFormation';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {store} from './store/store.js'
import {Navbar} from './module/navBar/navBar.jsx';

// const HomeBlock = styled.div`
//     background-color:pink;
// `;


// const HomeTitle = styled.div`
//     font-size:50px;
//     font-weight:bold;
//     display:flex;
//     items-align:center;
//     justify-content:center;
// `;

// const Home = ()=>{
//   return (
//     <>
//   </>
//   )
// }

ReactDOM.render(

  // <React.StrictMode>
  <Provider store={store}>
    {/* {counters.map((eachElement)=>(<Counter/>))} */}
    {/* <Transformation/>   */}
  <Navbar/>
  {/* <Component2/> */}
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
