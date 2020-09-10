import express from "express"
import router from './api/api.js';
import cors from "cors";

var app = express()

app.use(cors());

// app.use(express.static('public'))

app.use('/rest' , router);

app.listen(3001, function () {
    console.log('app is running at port 3001')
  })