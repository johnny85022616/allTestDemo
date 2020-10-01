var express = require("express");
var router = express.Router()
var bodyParser = require('body-parser')
const {insertUser} = require('../Dao/userDao.js')

var jsonParser = bodyParser.json()


router.get('/',(req,res)=>{
    res.send("this is first");    
})

router.post('/storeUser' , jsonParser , (req,res)=>{
    console.log(req.body);
    let memberList = req.body;
    insertUser(memberList);
    console.log("Insert Success")
});

module.exports = router;

