import React from 'react';
import styled from '@emotion/styled'
import { useSelector, useDispatch, batch} from 'react-redux';
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


const Column = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:20%;
    border:1px solid black;
    min-height:50px;
    :nth-of-type(3){
      width:30%;
    }
`;


const DeleteButton = styled.button`
    width:80px;
    height:30px;
    background-color: gray;
    color:white;
    width:25%;
`;


const Member = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
`;


export function MemberList() {
    const dispatch = useDispatch();
    let hasData = false;
    const dataList = useSelector(state => state.FormReducer.member);

    if(dataList.length>0){
        hasData = true
    }

    const handleDeleteButtonClick =(i)=>{
      // batch(()=>{
         dispatch({
              type:'DELETE_MEMBER_ARRAY',
              number:i
          })
          dispatch({
              type:'DELETE_MEMBER',
              number:i
          });
      // });
    }
    

  return (
    <>
      <ResultList hasData={hasData}>
          <div>名單</div>
          {dataList.map((eachElement,i)=>{
          return <Member key = {eachElement.name}>
                      <Column key={eachElement.name}>姓名 : {eachElement.name}</Column>
                      <Column key={eachElement.phone}>電話 : {eachElement.phone}</Column>
                      <Column key={eachElement.identityNumber}>身分證字號 : {eachElement.identityNumber}</Column>
                      <Column><DeleteButton onClick={()=>{handleDeleteButtonClick(i)}}>刪除</DeleteButton></Column>
              </Member>})}
      </ResultList>
    </>
  );
}

