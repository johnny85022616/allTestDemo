const initialState = {
    member : []
}

export const FormReducer = (state = initialState , action)=>{
    switch(action.type){
        case "ADD_MEMBER":
         
            //  state.member.push(action.data);
            
             let newMemberList = state.member.concat(action.data)
             let newState = Object.assign({},state,{
                member:newMemberList
            });  
            return  newState;
            // return Object.assign({},state,{member:state.member.concat({...state,name:action.data})})
        case "DELETE_MEMBER":
            return {...state,showCount: state.showCount-1}
        default:
            return state;   
    }
}