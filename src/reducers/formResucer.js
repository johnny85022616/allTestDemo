const initialState = {
    member : []
}

export const FormReducer = (state = initialState , action)=>{
    let newMemberList = null;
    let newState = null;
    switch(action.type){
        case "ADD_MEMBER":
         
            //  state.member.push(action.data);
            
              newMemberList = state.member.concat(action.data)
              newState = Object.assign({},state,{
                member:newMemberList
            });  
            return  newState;
            // return Object.assign({},state,{member:state.member.concat({...state,name:action.data})})
        case "DELETE_MEMBER":
             
            //  newMemberList = state.member.splice(action.number,1);
           newMemberList = [
                ...state.member.slice(0, action.number),
                ...state.member.slice(action.number + 1)
            ];
             newState = Object.assign({},state,{
                member:newMemberList
            });  
            return  newState;
        default:
            return state;   
    }
}

