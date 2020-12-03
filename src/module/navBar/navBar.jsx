import React, { useState} from 'react';
import styled from '@emotion/styled'
import {IncreaseForm} from '../nameList/nameList.js'
import {Home} from '../homePage/home.js'
import { useSelector, useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
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
    let history = useHistory();
    let match = useRouteMatch("/Delete")
    
    const handleButtonClick = ()=>{
        history.push("/Delete");
    }
    
    return(
        <Button onClick={handleButtonClick} active={match}>刪除</Button>
    )
}

const UpdateButton = ()=>{
    let history = useHistory();
    let match = useRouteMatch("/Update")
    
    const handleButtonClick = ()=>{
        history.push("/Update");
    }
    
    return(
        <Button onClick={handleButtonClick} active={match}>修改</Button>
    )
}


export const Navbar = ()=>{
    return (
        <NavBarBlock>
            <Router>
                {/* <ul>
                    <li>
                    <Link to="/Increase">新增</Link>
                    </li>
                    <li>
                    <Link to="/Delete">刪除</Link>
                    </li>
                    <li>
                    <Link to="/Update"></Link>
                    </li>
                </ul> */}
                <ButtonBlock>
                    <IncreaseButton/>
                    <DeleteButton/>
                    <UpdateButton/>
                </ButtonBlock>
        
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/Increase">
                        <IncreaseForm/>
                    </Route>
                    <Route path="/Delete">
                        <div>DeletePage</div>
                    </Route>
                    <Route path="/Update">
                        <div>UpdatePage</div>
                    </Route>
                </Switch>
            </Router>
        </NavBarBlock>
    )
}