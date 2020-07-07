import React, { useState} from 'react';
import styled from '@emotion/styled'
import {IncreaseForm} from '../nameList/nameList.js'

const HomeBlock = styled.div`
    background-color:pink;
`;

const ButtonBlock = styled.div`
   display:flex;
   justify-content:center;
`;

const HomeTitle = styled.div`
    font-size:50px;
    font-weight:bold;
    display:flex;
    items-align:center;
    justify-content:center;
`;

const ActionButton = styled.button`
height:40px;
width:100px;
background-color:gray;
color:white;
display:flex;
item-align:center;
justify-content:center;
margin:20px auto;
`;



export const Home = ()=>{
    
  return (
    <HomeBlock>
        <HomeTitle>新刪修首頁</HomeTitle>
        <ButtonBlock>
            <ActionButton>新增</ActionButton>
            <ActionButton>刪除</ActionButton>
            <ActionButton>修改</ActionButton>
        </ButtonBlock>
        <IncreaseForm/>
    </HomeBlock>
  );
}
