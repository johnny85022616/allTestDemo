import React, { useState} from 'react';
import styled from '@emotion/styled';
import {useMousePosition} from "./useMousePosition.jsx";
import { Component } from 'react';


export const Component1 =()=>{
  const position = useMousePosition()
  return (
      <div>
          <div>x: {position.x}</div>
          <div>y: {position.y}</div>
      </div>
  )
}


export const Component2 =()=>{
  const [count , setCount] = useState(0);

  const alertHello =()=>{
    setCount(count + 1);
    console.log(count);
  }
  return (
      <button onClick={alertHello}>點我(計次:{count})</button>
  )
}
