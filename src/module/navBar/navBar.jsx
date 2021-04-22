import React from 'react';
import styled from '@emotion/styled'
import {IncreaseForm} from '../nameList/IncreaseNameList.jsx'
import {DeleteForm} from '../nameList/DeleteNameList.jsx'
import {UpdateForm} from '../nameList/UpdateNameList.jsx'
import {Home} from '../homePage/home.js'
import {useDispatch ,useSelector} from 'react-redux';
import {Login} from '../Login/login.jsx'
import {getCookie} from '../../common/cookie.js'
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
        console.log("delete page click")
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
        console.log("Home page click")
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

    const userLogoutActionCreator = async()=>{
        await apiUserLogout();
        console.log(getCookie("jwtToken"))
        let isLogin = getCookie("jwtToken")===undefined?false:true;
        console.log(isLogin)
        return {type:'LOGIN_AND_LOGOUT',data:isLogin};
    }
    
    const asyncUserLogout= ()=>{
        return async(dispatch,getState)=>{
            dispatch(await userLogoutActionCreator());
            }
    }

    const handleButtonClick = ()=>{
      
        dispatch(asyncUserLogout());

        dispatch({  
            type:'DELETE_All_MEMBER',   //將原本存在於redux中的member刪除
        });
    history.push("/");
    }
    
    return(
        <Button onClick={handleButtonClick} active={match}>登出</Button>
    )
}


export const Navbar = ()=>{ 
    let history = useHistory();
    const isLogin = useSelector(state => state.userReducer.isLogin);
    const hasJwtToken = getCookie("jwtToken")?true:false;
    const dispatch = useDispatch();
    
    if(hasJwtToken === true){  //避免使用者refresh之後redux的isLogin變回init值，造成按下logout之後redux無法造成更新之狀況
        dispatch({type:'LOGIN_AND_LOGOUT',data:true});
    }

    console.log("Navbar!!!!!!!!!!!!!!!!!!!!!!!!!!")
    console.log("isLogin = "+isLogin);
    console.log("hasJwtToken = "+ hasJwtToken)
    const renderLoginOrNavbar = ()=>{
        if(isLogin===false){
            return (<Login/>)
        }else{
            return (<><ButtonBlock>
                        <HomeButton/>
                        <IncreaseButton/>
                        <DeleteButton/>
                        <UpdateButton/>
                        <LogoutButton/>
                    </ButtonBlock>
                    </>
                    )
        }
    }

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
                </ul>
                {isLogin?
                    <ButtonBlock>
                    <IncreaseButton/>
                    <DeleteButton/>
                    <UpdateButton/>
                    </ButtonBlock>:<Login/>
                } 
                */}

                {renderLoginOrNavbar()}
        
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/Home">
                        <Home/>
                    </Route>
                    <Route exact path="/Increase">
                        <IncreaseForm/>
                    </Route>
                    <Route path="/Delete">
                        <DeleteForm/>
                    </Route>
                    <Route path="/Update">
                        <UpdateForm/>
                    </Route>
                </Switch>
            </Router>
        </NavBarBlock>
    )
}