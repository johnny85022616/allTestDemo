import React, { useState, useEffect} from 'react';
import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux';
import { jsx, css, keyframes } from '@emotion/core'
import {apiUserStore} from "../../axiosManager/userRequest.js";


const down = keyframes`
  0%{
    margin-top:0;
  }
  100%{
    margin-top:40px;
  }
`

const ResultList = styled.div`
    display:inline-block;
    width:100%;
    text-align:center;
    ${({hasData})=>{
     return hasData==true? css`animation-name:${down}; animation-duration:2s; animation-fill-mode:forwards;`:''
    }}
    margin-bottom:20px;
`;

const Name = styled.div`
    margin-right:50px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Phone = styled.div`
    margin-right:50px;
    display:flex;
    justify-content:center;
    align-items:center;
`;


const DeleteButton = styled.button`
    width:80px;
    height:30px;
    background-color: gray;
    color:white;
`;


const Member = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
`;

const ButtonBlock = styled.div`
display:flex;
justify-content:center;
`;

const SendButton = styled.div`
height:30px;
width:100px;
background-color:gray;
color:white;
display:flex;
align-items:center;
justify-content:center;
margin:20px 0;
`;


export function MemberList() {
    const dispatch = useDispatch();
    let hasData = false;
    
    const dataList = useSelector(state => state.FormReducer.member);
    
    if(dataList.length>0){
        hasData = true
    }

    const handleDeleteButtonClick =(i)=>{
        dispatch({
            type:'DELETE_MEMBER',
            number:i
        });
    }

    const handleSendButtonClick = async()=>{
      console.log(dataList)
      const isComplete = await apiUserStore(dataList);
          
      }

   

    useEffect(()=>{
            
    })

  return (
    <>
      <ResultList hasData={hasData}>
          <div>名單</div>
          {dataList.map((eachElement,i)=>{
          return <Member key = {eachElement.name}>
                      <Name>姓名:{eachElement.name}</Name>
                      <Phone>電話:{eachElement.phone}</Phone>
                      <DeleteButton onClick={()=>{handleDeleteButtonClick(i)}}>刪除</DeleteButton>
              </Member>})}
      </ResultList>
      <ButtonBlock>
              <SendButton onClick={handleSendButtonClick}>送出</SendButton>
      </ButtonBlock>
    </>
  );
}

