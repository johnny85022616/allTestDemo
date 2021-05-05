import React, { useState, useEffect} from 'react';
import styled from '@emotion/styled'
import {useDispatch, useSelector} from 'react-redux';
import {apiUpdateUser} from '../../axiosManager/userRequest.js';
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


export function UpdateInput() {
    
    const dispatch = useDispatch();
    const [nameValue , setNameValue] = useState('');
    const [phoneValue , setPhoneValue] = useState('');
    const [identityValue , setIdentityValue] = useState('');
    const [nameErrorSwitch , setNameErrorSwitch] = useState(false);
    const [phoneErrorSwitch , setPhoneErrorSwitch] = useState(false);
    const [identityErrorSwitch , setIdentityErrorSwitch] = useState(false);

    let changeMemeber = useSelector(state => state.FormReducer.choseMemeber);

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
                let identityValue = e.target.value;
                setIdentityValue(identityValue);
                break;
            default:
        }
    }


    const handleUpdateButtonClick = async(actionType)=>{
        let name = nameValue;
        let phone = phoneValue;
        let identity = identityValue;
        let identityPass = identityRegister(identity);
        let phonePass = phoneRigister(phone);
        let namePass = name; //空白及錯誤

        if(!identityPass){
            setIdentityErrorSwitch(true);
            alert("請選擇要修改的成員")
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
                type:"CHANGE_UPADATE_MEMBER",
                data:data
            })

            
            await apiUpdateUser(data);

            setNameValue('');
            setPhoneValue('');
            setIdentityValue('');
        }
    }

    useEffect(()=>{
        setNameValue(changeMemeber.name||'');
        setPhoneValue(changeMemeber.phone||'')
        setIdentityValue(changeMemeber.identityNumber||'');
        

    },[changeMemeber])
  return (
    <Form>
        <div>
            輸入姓名 : <InputBlock type='text' value={nameValue} onChange={(e)=>{handleChange(e,"name")}}/>
        </div>
        <NameErrorMessageDiv>{nameErrorSwitch === true?"姓名不可為空白":""}</NameErrorMessageDiv>
        <div>
            輸入電話 : <InputBlock type='number' value={phoneValue} onChange={(e)=>{handleChange(e,"phone")}}/>
        </div>
        <PhoneErrorMessageDiv>{phoneErrorSwitch === true?"電話格式錯誤":""}</PhoneErrorMessageDiv>
        <div>
            輸入身分證字號 : <InputBlock type='text' value={identityValue} onChange={(e)=>{handleChange(e,"identityValue")}} readOnly/>
        </div>
        <ButtonBlock>
            <CommitButton onClick={()=>{handleUpdateButtonClick()}}>修改</CommitButton>
        </ButtonBlock>
    </Form>
  );
}

