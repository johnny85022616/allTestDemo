import React from 'react';
import styled from '@emotion/styled'
import Input from './input.jsx'
import {useHistory} from "react-router-dom";
import { useEffect } from 'react';
import {getCookie} from '../../common/cookie.js'

const LoginBlock = styled.div`
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

export function Login() {
  let isLogin = getCookie("jwtToken")===undefined?false:true; 
  const history = useHistory();
  const mayPushToHome = ()=>{   //如果為登入狀態，使用者在另個視窗開啟 /url 則會導到 home 頁 
        if(isLogin){
          history.push("/Home")
        }
  }
  useEffect(()=>{
    mayPushToHome();
  },[isLogin]);

  return (
    <LoginBlock>
        <Content>登入</Content> 
        <Input></Input>
    </LoginBlock>
  );
}

