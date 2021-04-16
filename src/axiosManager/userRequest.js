import axios from "axios";
import {getCookie} from '../common/cookie.js'

axios.defaults.withCredentials=true;//解決 cookie 跨域問題
let ip = process.env.NODE_ENV === "production" ? "138.91.21.212":"localhost";


const jwtToken = getCookie('jwtToken');
let config = {};

if(jwtToken!==undefined){
   config = {
    headers:{
      Authorization:"Bearer"+jwtToken
    }
  }
}

const userRequest = axios.create({
    // baseURL: 'http://localhost:3001/rest'
    baseURL: `http://${ip}:3001/rest`
  });



//user區
export const apiUserStore = (data) => userRequest.post('/storeUser', data).catch((err)=>{alert("伺服器異常")});
export const apiFindAllUser = () => userRequest.get('/findAllUser').catch((err)=>{alert("伺服器異常")});
export const apiUserDelete = (data)=> userRequest.post('/DeleteUser', data).catch((err)=>{alert("伺服器異常")});
export const apiUpdateUser = (data)=> userRequest.post('/UpdateUser', data).catch((err)=>{alert("伺服器異常")});
export const apiUserLogin = (data)=> userRequest.post('/UserLogin', data).catch((err)=>{alert("伺服器異常")})
export const apiUserLogout = ()=> userRequest.get('/UserLogout',config).catch((err)=>{alert("伺服器異常")});

