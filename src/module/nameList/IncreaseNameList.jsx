import React from 'react';
import styled from '@emotion/styled'
import Input from './input.jsx';
import {MemberList} from './result.jsx';
import {IncreaseSendButton} from './IncreaseSendButton.jsx';

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

export function IncreaseForm() {

  return (
    <NameList>
        <Content>新增使用者</Content>
        <Input />
        <MemberList/>
        <IncreaseSendButton/>
    </NameList>
  );
}

