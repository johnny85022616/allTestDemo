import {apiFindAllUser} from '../axiosManager/userRequest.js';

const findAllUserActionCreator = async()=>{
    const returnData = await apiFindAllUser();
    let users ;
    try{
       users = returnData.data.user;
  
        }catch(e){
          console.error("findAllUserActionCreator Error");
        }
      return {type:'FIND_ALL_MEMBER',data:users};
  }


  export default findAllUserActionCreator;