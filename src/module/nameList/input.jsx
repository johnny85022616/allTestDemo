import React, { useState, useEffect} from 'react';
import styled from '@emotion/styled'
import {useDispatch} from 'react-redux';

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
    
    const dispatch = useDispatch();
    const [nameValue , setNameValue] = useState('');
    const [phoneValue , setPhoneValue] = useState('');
    const [identityValue , setIdentityValue] = useState('');

    const handleChange = (e , inputType)=>{
        switch(inputType){
            case "name":
                let name = e.target.value;
                setNameValue(name);
            break;
            case "phone":
                let phone = e.target.value;
                setPhoneValue(phone);
            break;  
            case "identityValue":
                let identityValue = e.target.value;
                setIdentityValue(identityValue);
                break;
            default:
        }
    }


    const handleButtonClick = (actionType)=>{
        let name = nameValue;
        let phone = phoneValue;
        let identity = identityValue;

        const data = {
            name : name ,
            phone : phone,
            identityNumber : identity
        }
    
        dispatch({
            type: actionType , 
            data: data
        });

        setNameValue('');
        setPhoneValue('');
        setIdentityValue('');
    }

    useEffect(()=>{
     
    },[])
  return (
    <Form>
        <div>
            輸入姓名 : <InputBlock type='text' value={nameValue} onChange={(e)=>{handleChange(e,"name")}}/>
        </div>
        <div>
            輸入電話 : <InputBlock type='number' value={phoneValue} onChange={(e)=>{handleChange(e,"phone")}}/>
        </div>
        <div>
            輸入身分證字號 : <InputBlock type='text' value={identityValue} onChange={(e)=>{handleChange(e,"identityValue")}}/>
        </div>
        <ButtonBlock>
            <CommitButton onClick={()=>{handleButtonClick("ADD_MEMBER")}}>新增</CommitButton>
        </ButtonBlock>
    </Form>
  );
}

export default Input;