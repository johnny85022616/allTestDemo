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

const ButtonCss = (
    `height:40px;
    width:100px;
    background-color:gray;
    color:white;
    display:flex;
    item-align:center;
    justify-content:center;
    margin:20px auto;`
)

const IncreaseButton = styled.button`
${ButtonCss}
${({action})=>{
    if(action=='1'){
        return `background-color:Blue;`
    }
}}
`;

const DeleteButton = styled.button`
${ButtonCss}
${({action})=>{
    if(action=='2'){
        return `background-color:Blue;`
    }
}}
`;

const ChangeButton = styled.button`
${ButtonCss}
${({action})=>{
    if(action=='3'){
        return `background-color:Blue;`
    }
}}
`;
  
  export const Home = ()=>{
      const [action,setAction] = useState('0');
      
      const handleClick = (i)=>{
          setAction(i)
      }

  return (
    <HomeBlock>
        <HomeTitle>新刪修首頁</HomeTitle>
        <ButtonBlock>
            <IncreaseButton key={'1'} action={action} onClick={()=>{handleClick('1')}}>新增</IncreaseButton>
            <DeleteButton key={'2'} action={action} onClick={()=>{handleClick('2')}}>刪除</DeleteButton>
            <ChangeButton key={'3'} action={action} onClick={()=>{handleClick('3')}}>修改</ChangeButton>
        </ButtonBlock>
        <IncreaseForm/>
    </HomeBlock>
  );
}
