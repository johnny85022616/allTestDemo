const initialState = {
    member : [], 
    deleteMememberList : [] ,
    choseMemeber:{}
}

export const FormReducer = (state = initialState , action)=>{
    let newMemberList = null;
    let newState = null;
    let newDeleteMemeberList = null;
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

        case "DELETE_All_MEMBER":
            newState = Object.assign({},state,{
            member:[]
        })
        return  newState;
        
        case "FIND_ALL_MEMBER":
            newMemberList = state.member.concat(action.data)
            newState = Object.assign({},state,{
              member:newMemberList
          });  
          return  newState;
        
        case "DELETE_MEMBER_ARRAY":       //按送出才把所有要刪除的名單給deleteSendButton
            let deleteMemeber = state.member[action.number];
            newDeleteMemeberList = state.deleteMememberList.concat(deleteMemeber);
            newState = Object.assign({},state,{
                deleteMememberList:newDeleteMemeberList
            });  
            return  newState;
        
        case "UPDATE_MEMBER":    //被選到的member(要放到input裡面的)
            let choseMemeber = state.member[action.number];
            console.log(choseMemeber)
            newState = Object.assign({},state,{
                choseMemeber:choseMemeber
            });
            return newState;

        case "CHANGE_UPADATE_MEMBER":
            let updateMemeber = action.data;
            let number = null;
            let changeUpadateMemeber = [];
            state.member.forEach((eachElement,i)=>{
                if(updateMemeber.identityNumber === eachElement.identityNumber){
                    number = i;
                    changeUpadateMemeber.push(updateMemeber);
                }
            });
            newMemberList = [
                ...state.member.slice(0,number),
                ...changeUpadateMemeber,
                ...state.member.slice(number+1)
            ]
            newState = Object.assign({},state,{
                member:newMemberList
            });
            return newState;

        default:
            return state;   
    }
}

