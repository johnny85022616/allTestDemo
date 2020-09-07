import React, { useState} from 'react';
import styled from '@emotion/styled'
import Input from './input.js';
import {MemberList} from './result.js'

const NameList = styled.div`
    background-color:pink;
    margin: 0 auto;
`;


export function IncreaseForm() {

  return (
    <NameList>
        <Input />
        <MemberList/>
    </NameList>
  );
}

