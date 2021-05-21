import React from 'react';
import styled from '@emotion/styled'
import Input from './input.jsx';
import {MemberList} from './result.jsx';
import {IncreaseSendButton} from './IncreaseSendButton.jsx';
import {Navbar} from '../navBar/navBar.jsx'

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

export function IncreaseForm() {

  return (
    <>
      <Navbar/>
      <NameList>
          <Content>新增使用者</Content>
          <Input />
          <MemberList/>
          <IncreaseSendButton/>
      </NameList>
    </>
    
  );
}

