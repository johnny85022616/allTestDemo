const initialState = {
    showCount: 0,
}

export const counterReducer = (state = initialState , action)=>{
    switch(action.type){
        case "INCRESE":
            return {...state,showCount: state.showCount+1}
        case "DELETE":
            return {...state,showCount: state.showCount-1}
        default:
            return state;
      
    }
}


