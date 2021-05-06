import React from 'react';
import styled from '@emotion/styled'
import { useSelector, useDispatch} from 'react-redux';
import { css, keyframes } from '@emotion/core'


const down = keyframes`
  0%{
    margin-top:0;
  }
  100%{
    margin-top:40px;
  }
`

const ReseltListContainer = styled.div`
  overflow:auto;
  text-align:center;
`;

const ResultList = styled.div`
    display:inline-block;
    text-align:center;
    ${({hasData})=>{
     return hasData===true? css`animation-name:${down}; animation-duration:2s; animation-fill-mode:forwards;`:''
    }}
    margin-bottom:20px;
`;


const Column = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:350px;
    border:1px solid black;
    min-height:50px;
    box-sizing: border-box;
    background-color:	#F5FFE8;
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

const DeleteButtonBlock = styled.div`
    width:150px;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid black;
    min-height:50px;
    box-sizing: border-box;
    background-color:	#F5FFE8;
`;


export function MemberList() {
    const dispatch = useDispatch();
    let hasData = false;
    const dataList = useSelector(state => state.FormReducer.member)||[];

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
    <ReseltListContainer>
      <ResultList hasData={hasData}>
          {
          dataList.map((eachElement,i)=>{
          return <Member key = {(eachElement||{}).name}>
                      <Column key={(eachElement||{}).name}>姓名 : {(eachElement||{}).name}</Column>
                      <Column key={(eachElement||{}).phone}>電話 : {(eachElement||{}).phone}</Column>
                      <Column key={(eachElement||{}).identityNumber}>身分證字號 : {(eachElement||{}).identityNumber}</Column>
                      <DeleteButtonBlock><DeleteButton onClick={()=>{handleDeleteButtonClick(i)}}>刪除</DeleteButton></DeleteButtonBlock>
              </Member>})}
      </ResultList>
    </ReseltListContainer>
  );
}

