import React, {useState} from 'react';
import styled from '@emotion/styled'
import {apiUserLogin} from "../../axiosManager/userRequest.js";
import {getCookie} from "../../common/cookie.js" ;
import { useDispatch } from 'react-redux';
import {useHistory} from "react-router-dom";

const Form = styled.div`
min-height: 140px;
display:inline-block;
width:100%;
text-align:center;
`;

const CommitButton = styled.div`
height:30px;
width:100px;
background-color:gray;
color:white;
display:flex;
align-items:center;
justify-content:center;
margin:20px auto;
`;


const InputBlock = styled.input`
margin-top:20px;
`;

const ButtonBlock = styled.div`
display:flex;
justify-content:center;
`;



function Input() {
    
    const [nameValue , setNameValue] = useState('');
    const [identityValue , setIdentityValue] = useState('');

    const dispatch = useDispatch();
    let history = useHistory();

    const handleChange = (e , inputType)=>{
        switch(inputType){
            case "name":
                let name = e.target.value;
                setNameValue(name);
            break;

            case "identityValue":
                let identityValue = (e.target.value).toUpperCase();
                setIdentityValue(identityValue);
            break;

            default:
        }
    }

    const handleButtonClick = async()=>{
        let name = nameValue;
        let identity = identityValue;

        let data = {
            name : name ,
            identityNumber : identity
        }
        
        let message = await apiUserLogin(data);
        alert(message.data.loginMessage)
        let isLogin = getCookie("jwtToken")===undefined?false:true;
        if(isLogin){
            history.push("/Home");
        }
    }

  return (
    <Form>
        <div>
            輸入姓名 : <InputBlock type='text' value={nameValue} onChange={(e)=>{handleChange(e,"name")}}/>
        </div>
        <div>
            輸入身分證字號 : <InputBlock type='text' value={identityValue} onChange={(e)=>{handleChange(e,"identityValue")}}/>
        </div>
        <ButtonBlock>
            <CommitButton onClick={handleButtonClick}>登入</CommitButton>
        </ButtonBlock>
    </Form>
  );
}

export default Input;