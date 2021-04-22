const initialState = {
    startNumber:0
}

export const paginationReducer = (state = initialState , action)=>{
    
    let newState = null;
    switch(action.type){
        case "PAGINATION_DATA":

            newState = {...state,startNumber:action.data};
            
            return  newState;
            
        default:
            return state;   
    }
}

