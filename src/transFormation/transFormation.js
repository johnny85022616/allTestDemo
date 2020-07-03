import React, { useState} from 'react';
import styled from '@emotion/styled';
import Converter from './converter.js';
import Level from './Level.js';

const Container = styled.div`
background-color: #ededed;
`;


function Transformation() {
  return (
    <Container>
       <Converter originalState={0}/>
       <Level/>
    </Container>
  );
}

export default Transformation;