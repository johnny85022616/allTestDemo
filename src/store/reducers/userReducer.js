const initialState = {
    isLogin:false
}

export const userReducer = (state = initialState , action)=>{
    
    let newState = null;
    switch(action.type){
        case "LOGIN_AND_LOGOUT":
            newState = {...state,isLogin:action.data}
    
            return  newState;
            
        default:
            return state;   
    }
}