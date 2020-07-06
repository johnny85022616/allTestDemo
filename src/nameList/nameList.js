import React, { useState} from 'react';
import styled from '@emotion/styled'
import Input from './input.js';
import {MemberList} from './result.js'

const NameList = styled.div`
    width:600px;
    background-color:pink;
    margin: 0 auto;
`;


export function Form() {

  return (
    <NameList>
        <Input />
        <MemberList/>
    </NameList>
  );
}

