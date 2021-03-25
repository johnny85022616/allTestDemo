import React, {useEffect} from 'react';
import styled from '@emotion/styled'
import {apiFindAllUser} from '../../axiosManager/userRequest.js'
import { useDispatch } from 'react-redux';
import {UpdateMemberList} from './UpdateResult.jsx'
import {UpdateInput} from './UpdateInput.jsx'

const NameList = styled.div`
    margin: 0 auto;
    background-color:pink;
    height:100vh;
    padding-top:40px;
`;
const Content = styled.div`
    font-size:40px;
    font-weight:bold;
    display:flex;
    justify-content:center;
`;

const findAllUserActionCreator = async()=>{
        const returnData = await apiFindAllUser();
        const users = returnData.data.user;
    return {type:'FIND_ALL_MEMBER',data:users};
}

const asyncFindAllUser = ()=>{
    return async(dispatch,getState)=>{
        dispatch(await findAllUserActionCreator());
    }
}

export function UpdateForm() {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(asyncFindAllUser());
  },[dispatch]);

  return (
    <NameList>
        <Content>修改使用者</Content>
        <UpdateInput/>
        <UpdateMemberList/>
    </NameList>
  );
}

