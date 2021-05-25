import React, {useEffect} from 'react';
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux';
import {UpdateMemberList} from './UpdateResult.jsx'
import {UpdateInput} from './UpdateInput.jsx'
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

export function UpdateForm() {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(asyncFindAllUser());
    return ()=>{
      dispatch({
        type:"DELETE_CHOSE_MEMBER_FROM_REDUX"
      })
    }
  },[dispatch]);

  return (
    <> 
      <Navbar/>  
      <NameList>
          <Content>修改使用者</Content>
          <UpdateInput/>
          <UpdateMemberList/>
      </NameList>
    </>
  );
}

