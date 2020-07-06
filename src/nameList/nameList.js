import React, { useState} from 'react';
import styled from '@emotion/styled'
import Input from './input.js';


const NameList = styled.div`
    width:600px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:pink;
    margin:0 auto
`;


export function Form() {

  return (
    <NameList>
        <Input />
    </NameList>
  );
}

