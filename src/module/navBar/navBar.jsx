import React from 'react';
import styled from '@emotion/styled'
import {useDispatch } from 'react-redux';
import {apiUserLogout} from '../../axiosManager/userRequest' 

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    useRouteMatch
  } from "react-router-dom";

  const NavBarBlock = styled.div`
`;

const ButtonBlock = styled.div`
    display:flex;
`;
const Button = styled.div`
    ${(props)=>{
        return props.active?"background-color:#C4E1FF;color:black;":"background-color:#2828FF;color:white;";
    }}
    border-right:2px solid black;
    width:33.3%;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;	
    :last-child{
        border-right:0;
    }
`;

const IncreaseButton = ()=>{
    const dispatch = useDispatch();
    let history = useHistory();
    let match = useRouteMatch("/Increase");
    
    const handleButtonClick = ()=>{ 
        dispatch({  
            type:'DELETE_All_MEMBER',   //將原本存在於redux中的member刪除
          });
        history.push("/Increase");
    }
    
    return(
        <Button onClick={handleButtonClick} active={match}>新增</Button>
    )
}
const DeleteButton = ()=>{
    const dispatch = useDispatch();
    let history = useHistory();
    let match = useRouteMatch("/Delete")
    
    const handleButtonClick = ()=>{
        dispatch({  
            type:'DELETE_All_MEMBER',   //將原本存在於redux中的member刪除
        });
        history.push("/Delete");
    }
    
    return(
        <Button onClick={handleButtonClick} active={match}>刪除</Button>
    )
}

const HomeButton = ()=>{
    const dispatch = useDispatch();
    let history = useHistory();
    let match = useRouteMatch({path:["/Home"]}) 
    
    const handleButtonClick = ()=>{
        dispatch({  
            type:'DELETE_All_MEMBER',   //將原本存在於redux中的member刪除
        });
        history.push("/Home");
    }
    
    return(
        <Button onClick={handleButtonClick} active={match}>首頁</Button>
    )
}

const UpdateButton = ()=>{
    const dispatch = useDispatch();
    let history = useHistory();
    let match = useRouteMatch("/Update")
    
    const handleButtonClick = ()=>{
        dispatch({  
            type:'DELETE_All_MEMBER',   //將原本存在於redux中的member刪除
          });
        history.push("/Update");
    }
    
    return(
        <Button onClick={handleButtonClick} active={match}>修改</Button>
    )
}

const LogoutButton = ()=>{
    const dispatch = useDispatch();
    
    let history = useHistory();
    let match = false;
    

    const handleButtonClick = async()=>{
      
        await apiUserLogout();
        history.push("/");
    }
    
    return(
        <Button onClick={handleButtonClick} active={match}>登出</Button>
    )
}

export const Navbar = ()=>{ 

    return (
        <NavBarBlock>
            <ButtonBlock>
                <HomeButton/>
                <IncreaseButton/>
                <DeleteButton/>
                <UpdateButton/>
                <LogoutButton/>
            </ButtonBlock>
        </NavBarBlock>
    )
}