import React from 'react';
import styled from '@emotion/styled'
import {useSelector} from 'react-redux';
import {apiUserDelete} from "../../axiosManager/userRequest.js";

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



export const DeleteSendButton = ()=>{
    const deleteDataList = useSelector(state => state.FormReducer.deleteMememberList);
    
    const handleSendButtonClick = async()=>{
        await apiUserDelete(deleteDataList);
        console.log("22222");
    }

    return (
        <ButtonBlock>
                <SendButton onClick={handleSendButtonClick}>送出</SendButton>
        </ButtonBlock>
    );
}