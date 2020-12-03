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

const HomeContent = styled.div`
    font-size:25px;
    display:flex;
    items-align:center;
    justify-content:center;
    margin-top:30px;
`;

  
  export const Home = ()=>{

  return (
    <HomeBlock>
       <HomeTitle>新刪修首頁</HomeTitle>
       <HomeContent>歡迎來到張裕的新刪修網站，此頁面為功能非常基本之新刪修網頁，供面試使用。</HomeContent>
    </HomeBlock>
  );
}
