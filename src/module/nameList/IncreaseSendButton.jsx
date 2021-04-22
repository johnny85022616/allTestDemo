import React from 'react';
import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux';
import {apiUserStore} from "../../axiosManager/userRequest.js";

const ButtonBlock = styled.div`
display:flex;
justify-content:center;
`;

const SendButton = styled.div`
height:30px;
width:100px;
background-color:gray;
color:white;
display:flex;
align-items:center;
justify-content:center;
margin:20px 0;
`;



export const IncreaseSendButton = ()=>{
    
    const dataList = useSelector(state => state.FormReducer.member);
    console.log(dataList)
    const dispatch = useDispatch();

    const handleSendButtonClick = async()=>{
        const isComplete = await apiUserStore(dataList);
        console.log(isComplete);
        dispatch({
          type:'DELETE_All_MEMBER',
        });
    
    }
    return (
        <ButtonBlock>
                <SendButton onClick={handleSendButtonClick}>送出</SendButton>
        </ButtonBlock>
    );
}