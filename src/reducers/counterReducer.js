const initialState = {
    showCount: 0,
}

export const counterReducer = (state = initialState , action)=>{
    switch(action.type){
        case "INCREMENT":
            return {...state,showCount: state.showCount+1}
        case "DECREMENT":
            return {...state,showCount: state.showCount-1}
        default:
            return state;
      
    }
}