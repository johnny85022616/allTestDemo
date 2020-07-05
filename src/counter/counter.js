import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';

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
    display:${(props => (props.count<10?'block':'none'))};
`;

const Chevron_down = styled.div`
    width:20px;
    height:20px;
    background-color: blue;
    margin-right:10px;
    display: ${(props=>(props.count>0?'block':'none'))};
`;

function Counter() {
    const [count , setCount] = useState(0);

    const dispatch = useDispatch();

    const handleClick = (action)=>{
    //    if(action == 'increment'){
    //     setCount(count+1);
    //    }else if(action == 'decrement'){
    //     setCount(count-1);
    //    }
        dispatch({
            type: action ,
            count : count
        })
        
    }


  return (
    <Container>
        <Chevron_down count={count} onClick={()=>{
            handleClick('DECREMENT');
            setCount(count-1)
            }}></Chevron_down>
        <div className="number">{count}</div>
        <Chevron_up count={count} onClick={()=>{
            handleClick('INCREMENT');
            setCount(count+1)
            }}></Chevron_up>
    </Container>
  );
}

export default Counter;