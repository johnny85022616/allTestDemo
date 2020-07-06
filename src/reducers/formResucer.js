const initialState = {
    member : []
}

export const FormReducer = (state = initialState , action)=>{
    switch(action.type){
        case "ADD_MEMBER":
            state.member.push(action.data);
            // console.log(state.member)
            return state
        case "DELETE_MEMBER":
            return {...state,showCount: state.showCount-1}
        default:
            return state;   
    }
}