import React, {useEffect} from 'react';
import styled from '@emotion/styled'
import {MemberList} from './result.jsx'
import {DeleteSendButton} from './DeleteSendButton.jsx'
import { useDispatch } from 'react-redux';
import {Navbar} from '../navBar/navBar.jsx'
import findAllUserActionCreator from '../../action/getAllUserAction.js'


const NameList = styled.div`
    margin: 0 auto;
    background-color:pink;
    padding-top:40px;
    padding-left:4%;
    padding-right:4%;
    min-height:100vh;
`;
const Content = styled.div`
    font-size:40px;
    font-weight:bold;
    display:flex;
    justify-content:center;
`;



const asyncFindAllUser = ()=>{
    return async(dispatch,getState)=>{
        dispatch(await findAllUserActionCreator());
    }
}

export function DeleteForm() {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    // findAllUserActionCreator(dispatch).then((message)=>{
    //     console.log(message)
    // });
    dispatch(asyncFindAllUser());
  },[dispatch]);

  return (
    <>
      <Navbar/>
      <NameList>
          <Content>刪除使用者</Content>
          <MemberList/>
          <DeleteSendButton/>
      </NameList>
    </>
  );
}

