import React, { useState, useEffect} from 'react';
import styled from '@emotion/styled'
import { useSelector } from 'react-redux';
import { jsx, css, keyframes } from '@emotion/core'



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


const Member = styled.div`
width:100%;
display:flex;
justify-content:center;
`;

export function MemberList() {

    let hasData = false;
    const dataList = useSelector(state => state.FormReducer.member);
    if(dataList.length>0){
        hasData = true
    }

    useEffect(()=>{
        
    })

  return (
    <ResultList hasData={hasData}>
        <div>名單</div>
        {dataList.map((eachElement)=>{
        console.log(eachElement)
        return <Member key = {eachElement.name}>
            <div>姓名:{eachElement.name}</div><div>電話:{eachElement.phone}</div>
            </Member>})}
    </ResultList>
  );
}

