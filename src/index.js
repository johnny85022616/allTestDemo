import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Counter from './counter'
import Transformation from './transFormation/transFormation';
import * as serviceWorker from './serviceWorker';
import styled from '@emotion/styled'


const RootStyle = styled.div`
  display: flex
  align-items:center;
`;

// const counters = Array.from({ length: 5 }, (_, index) => index); 

ReactDOM.render(
  // <React.StrictMode>
  <RootStyle>
    {/* {counters.map((eachElement)=>(<Counter/>))} */}
    <Transformation/>  
  </RootStyle>,  
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
