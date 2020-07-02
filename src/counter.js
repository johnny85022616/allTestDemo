import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'


function Counter() {
    const [count , setCount] = useState(0);
    const Container = styled.div`
    background-color: #ededed;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    `;
    
    const Chevron_up = styled.div`
        width:20px;
        height:20px;
        background-color: red;
        margin-left:10px;
        display:${count<10?'block':'none'};
    `;
    
    const Chevron_down = styled.div`
        width:20px;
        height:20px;
        background-color: blue;
        margin-right:10px;
        display: ${count>0?'block':'none'};
    `;


   const handleClick = (action)=>{
       if(action == 'increment'){
        setCount(count+1);
       }else if(action == 'decrement'){
        setCount(count-1);
       }
   }

  return (
    <Container>
        <Chevron_down onClick={()=>{handleClick('decrement')}}></Chevron_down>
        <div className="number">{count}</div>
        <Chevron_up onClick={()=>{handleClick('increment')}}></Chevron_up>
    </Container>
  );
}

export default Counter;