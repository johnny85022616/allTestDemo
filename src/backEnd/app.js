var express = require("express");
var router = require('./Controller/api.js');
var cors = require("cors");
var cookieParser = require("cookie-parser")
var path = require('path')


let port = process.env.NODE_ENV === "development" ? "3000":"5000";

var app = express();

//--------------production mode 下把 build 的東西掛到 express server 上 ---------------------
app.use(express.static(path.join(__dirname,'../../build')));
  
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../../build','index.html'));
  })
//-----------------------------------------------------------------------------------------

app.use(cors({credentials:true, origin:`http://localhost:${port}`})); // option credentials為解決cookie跨域不可傳遞之問題

app.use(cookieParser());
// app.use(express.static('public')

app.use('/rest', router);


app.listen(3001, function () {
    console.log(process.env.NODE_ENV);
    console.log('app is running at port 3001')
  })