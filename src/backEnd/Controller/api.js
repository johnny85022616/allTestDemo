var express = require("express");
var router = express.Router()
var bodyParser = require('body-parser')
const {insertUser, findAllUser , deletUser, updateUser,findOne} = require('../Dao/userDao.js')
var jwt = require('jsonwebtoken')

var jsonParser = bodyParser.json()


const secret = "userInfoKey"

// router.get('/',(req,res)=>{
//     res.send("this is first");    
// })

router.post('/UserLogin' , jsonParser , async(req,res)=>{
    console.log(req.body);
    let loginData = req.body;
    console.log(req.cookies);
        await findOne(loginData).then((userInfo)=>{
            let payload = {
                name : userInfo.name,
                identityNumber : userInfo.identityNumber
            }
            const jwtToken = jwt.sign(payload,secret,{algorithm:"HS256"})
            res.cookie('jwtToken',jwtToken,{expires:new Date(Date.now()+5*60*1000)});
            console.log(jwtToken);
            res.json({ msg: 'success' , jwtToken:jwtToken});
        }).catch((err)=>{
            console.log("login fail!!!!!!!!!!")
        });
});

router.get('/UserLogout' , jsonParser , async(req,res)=>{
    res.clearCookie("jwtToken");
    const token = req.header('Authorization').replace('Bearer','');
    const decoded = jwt.verify(token,secret)
    let arr = Object.keys(decoded);
    arr.map((ele)=>{
        console.log(ele)
        console.log(decoded[ele]);
    });
    console.log("$$$$$$$$$$$$$$$"+decoded)
    res.json({ msg: 'success'});
});


//存多個或一個user
router.post('/storeUser' , jsonParser , (req,res)=>{
    console.log(req.body);
    let memberList = req.body;
    insertUser(memberList);
    console.log("Insert Success")
    res.json({ msg: 'success' });
});
//查詢所有user
router.get('/findAllUser', jsonParser , async(req,res)=>{
    const user = await findAllUser();
    // console.log("user: "+user);
    res.json({ msg: 'success' , user:user});
})
//刪除多個或一個user
router.post('/DeleteUser' , jsonParser , (req,res)=>{
    console.log(req.body);
    let deleteMemeberList = req.body;
    deletUser(deleteMemeberList);
    console.log("delete success");
    res.json({msg:'success'});

})
//更新一個user
router.post('/UpdateUser' , jsonParser , (req,res)=>{
    let user = req.body;
    updateUser(user);
    console.log("Update Success!!");
    res.json({msg:'success'});
})

module.exports = router;

