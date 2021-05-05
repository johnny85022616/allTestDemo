import React, { useState, useEffect} from 'react';
import styled from '@emotion/styled'
import {useDispatch} from 'react-redux';
import {nameIllegalRegister , identityRegister , phoneRigister} from '../../common/register.js'

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

const IdentityErrorMessageDiv = styled.div`
    color:red;
`;

const PhoneErrorMessageDiv = styled.div`
    color:red;
`;

const NameErrorMessageDiv = styled.div`
    color:red;
`;


function Input() {
    
    const dispatch = useDispatch();
    const [nameValue , setNameValue] = useState('');
    const [phoneValue , setPhoneValue] = useState('');
    const [identityValue , setIdentityValue] = useState('');
    const [nameErrorSwitch , setNameErrorSwitch] = useState(false);
    const [phoneErrorSwitch , setPhoneErrorSwitch] = useState(false);
    const [identityErrorSwitch , setIdentityErrorSwitch] = useState(false);

    const handleChange = (e , inputType)=>{
        switch(inputType){
            case "name":
                let name = e.target.value;
                let isMatch = nameIllegalRegister(name);
                console.log(isMatch);
                if(isMatch){
                    alert("只可輸入 a-z A-Z 0-9 及 _")
                }else{
                    setNameValue(name);
                }
            break;
            case "phone":
                let phone = e.target.value;
                setPhoneValue(phone);
            break;  
            case "identityValue":
                let identityValue = (e.target.value).toUpperCase();
                setIdentityValue(identityValue);
                break;
            default:
        }
    }


    const handleButtonClick = (actionType)=>{
    
        let name = nameValue;
        let phone = phoneValue;
        let identity = identityValue;
        let identityPass = identityRegister(identity);
        let phonePass = phoneRigister(phone);
        let namePass = name; //空白及錯誤
        
        if(!identityPass){
            setIdentityErrorSwitch(true);
        }else{
            setIdentityErrorSwitch(false);
        }

        if(!phonePass){
            setPhoneErrorSwitch(true);
        }
        else{
            setPhoneErrorSwitch(false)
        }

        if(!name){
            setNameErrorSwitch(true)
        }else{
            setNameErrorSwitch(false);
        }
       
        if(identityPass && phonePass && namePass){

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
    }


    useEffect(()=>{
     
    },[])
  return (
    <Form>
        <div>
            輸入姓名 : <InputBlock type='text' value={nameValue}  maxLength="5" onChange={(e)=>{handleChange(e,"name")}}/>
        </div>
        <NameErrorMessageDiv>{nameErrorSwitch === true?"姓名不可為空白":""}</NameErrorMessageDiv>
        <div>
            輸入電話 : <InputBlock type='number' value={phoneValue} maxLength="8" onChange={(e)=>{handleChange(e,"phone")}}/>
        </div>
        <PhoneErrorMessageDiv>{phoneErrorSwitch === true?"電話格式錯誤":""}</PhoneErrorMessageDiv>
        <div>
            輸入身分證字號 : <InputBlock type='text' value={identityValue} onChange={(e)=>{handleChange(e,"identityValue")}}/>
        </div>
        <IdentityErrorMessageDiv>{identityErrorSwitch === true?"身分證字號格式錯誤":""}</IdentityErrorMessageDiv>
        <ButtonBlock>
            <CommitButton onClick={()=>{handleButtonClick("ADD_MEMBER")}}>新增</CommitButton>
        </ButtonBlock>
    </Form>
  );
}

export default Input;