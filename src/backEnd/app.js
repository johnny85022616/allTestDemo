import express from 'express';
import router from './Controller/api.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path'
import propertiesReader from 'properties-reader';
import {matchRoutes} from 'react-router-config'
//import {routes} from '../Routes/routes.js'



let properties = process.env.NODE_ENV === "production" ? propertiesReader('./production.properties'):propertiesReader('./development.properties');
let serverPort = properties.get("server.port")
let corsPort = process.env.NODE_ENV === "development" ? "3000":"5000";

var app = express();

app.use(cors({credentials:true, origin:`http://localhost:${corsPort}`})); // option credentials為解決cookie跨域不可傳遞之問題

app.use(cookieParser());

app.use('/rest', router);

//--------------production mode 下把 build 的東西掛到 express server 上 ---------------------
app.use(express.static(path.join(__dirname,'../build')));  //若打包過， __dirname的路徑會變成 webpack output 出的路徑 
  
app.get(/\/[^rest]/,function(req,res){
    if(!req.cookies.jwtToken){  //若未登入(無 jwtToken) 則導到登入頁 , 避免使用者未登入直接輸入網址進入功能頁面
      res.redirect('/');
    }

    //const promises = matchRoutes();

    res.sendFile(path.join(__dirname,'../build','index.html'));
  })
//-----------------------------------------------------------------------------------------


app.listen(serverPort, function () {
    console.log('app is running at port 3001')
  })