import axios from "axios";
import {getCookie} from '../common/cookie.js'

axios.defaults.withCredentials=true;//解決 cookie 跨域問題

const jwtToken = getCookie('jwtToken');
let config = {};

if(jwtToken!=undefined){
   config = {
    headers:{
      Authorization:"Bearer"+jwtToken
    }
  }
}

const userRequest = axios.create({
    baseURL: 'http://localhost:3001/rest'
  });



//user區
export const apiUserStore = (data) => userRequest.post('/storeUser', data);
export const apiFindAllUser = () => userRequest.get('/findAllUser');
export const apiUserDelete = (data)=> userRequest.post('/DeleteUser', data);
export const apiUpdateUser = (data)=> userRequest.post('/UpdateUser', data);
export const apiUserLogin = (data)=> userRequest.post('/UserLogin', data);
export const apiUserLogout = ()=> userRequest.get('/UserLogout',config);

