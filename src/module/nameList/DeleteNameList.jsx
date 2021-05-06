import React, {useEffect} from 'react';
import styled from '@emotion/styled'
import {MemberList} from './result.jsx'
import {DeleteSendButton} from './DeleteSendButton.jsx'
import {apiFindAllUser} from '../../axiosManager/userRequest.js'
import { useDispatch } from 'react-redux';

const NameList = styled.div`
    margin: 0 auto;
    background-color:pink;
    height:100vh;
    padding-top:40px;
    padding-left:4%;
    padding-right:4%;
`;
const Content = styled.div`
    font-size:40px;
    font-weight:bold;
    display:flex;
    justify-content:center;
`;

const findAllUserActionCreator = async()=>{
  const returnData = await apiFindAllUser();
  let users ;
  try{
     users = returnData.data.user;

      }catch(e){
        console.error("DeleteNameList findAllUserActionCreator Error");
      }
    return {type:'FIND_ALL_MEMBER',data:users};
}

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
    <NameList>
        <Content>刪除使用者</Content>
        <MemberList/>
        <DeleteSendButton/>
    </NameList>
  );
}

