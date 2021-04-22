var express = require("express");
var router = require('./Controller/api.js');
var cors = require("cors");
var cookieParser = require("cookie-parser")
var path = require('path')
var propertiesReader = require('properties-reader');


let properties = process.env.NODE_ENV === "production" ? propertiesReader('./production.properties'):propertiesReader('./development.properties');
let serverPort = properties.get("server.port")
let corsPort = process.env.NODE_ENV === "development" ? "3000":"5000";

var app = express();

//--------------production mode 下把 build 的東西掛到 express server 上 ---------------------
app.use(express.static(path.join(__dirname,'../../build')));
  
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../../build','index.html'));
  })
//-----------------------------------------------------------------------------------------

app.use(cors({credentials:true, origin:`http://localhost:${corsPort}`})); // option credentials為解決cookie跨域不可傳遞之問題

app.use(cookieParser());
// app.use(express.static('public')

app.use('/rest', router);


app.listen(serverPort, function () {
    console.log(process.env.NODE_ENV);
    console.log('app is running at port 3001')
  })