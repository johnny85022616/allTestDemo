var express = require("express");
var router = require('./Controller/api.js');
var cors = require("cors");
var cookieParser = require("cookie-parser")

var app = express()

app.use(cors({credentials:true, origin:'http://localhost:3000'})); // option 為解決cookie跨域不可傳遞之問題

app.use(cookieParser());
// app.use(express.static('public')

app.use('/rest', router);

app.listen(3001, function () {
    console.log('app is running at port 3001')
  })