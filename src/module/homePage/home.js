import React, { useState} from 'react';
import styled from '@emotion/styled'
import {IncreaseForm} from '../nameList/nameList.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const HomeBlock = styled.div`
    
`;


const HomeTitle = styled.div`
    font-size:50px;
    font-weight:bold;
    display:flex;
    items-align:center;
    justify-content:center;
`;

  
  export const Home = ()=>{

  return (
    <HomeBlock>
       <HomeTitle>新刪修首頁</HomeTitle>
    </HomeBlock>
  );
}
