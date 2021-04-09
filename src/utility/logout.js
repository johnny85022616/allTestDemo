import React, { useState, useEffect} from 'react';
import styled from '@emotion/styled'
import {getCookie} from "../common/cookie.js" ;
import { useDispatch } from 'react-redux';
import {apiUserLogout} from '../axiosManager/userRequest.js'


export const LogoutTimer = ()=>{

    useEffect();
    setTimeout(()=>{
        
    },1000*3)
    return (<></>)
}

export const useLogout = ()=>{

    const dispatch = useDispatch();
    console.log("useLogout !!!!!!!!!!!!!!!!!!!!")
    const userLogoutActionCreator = async()=>{
        await apiUserLogout();
        console.log(getCookie("jwtToken"))
        let isLogin = getCookie("jwtToken")==undefined?false:true;
        return {type:'LOGIN',data:isLogin};
    }
    
    const asyncUserLogout= ()=>{
        return async(dispatch,getState)=>{
            dispatch(await userLogoutActionCreator());
            }
    }

    dispatch({  
        type:'DELETE_All_MEMBER',   //將原本存在於redux中的member刪除
      });

   return [asyncUserLogout];

}