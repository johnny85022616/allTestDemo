import express from "express"
import router from './api/api.js';

var app = express()

app.use('/rest',router);

app.listen(3001, function () {
    console.log('app is running at port 3001')
  })