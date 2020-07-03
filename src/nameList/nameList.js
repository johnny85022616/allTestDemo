import React, { useState} from 'react';
import styled from '@emotion/styled'
import Input from './input.js';


const nameList = styled.div`
    width:300px;
    margin:0 auto;
    height:500px;
    background-color:pink;
`;


function NameList() {

  return (
    <nameList>
        <Input />
    </nameList>
  );
}

export default NameList;