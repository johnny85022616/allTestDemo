import React, {useEffect} from 'react';
import styled from '@emotion/styled'
import Input from './input.jsx'

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
  
  

  return (
    <LoginBlock>
        <Content>登入</Content> 
        <Input></Input>
    </LoginBlock>
  );
}

