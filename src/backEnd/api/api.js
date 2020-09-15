var express = require("express");
var router = express.Router()
var db = require("../../../models/index.js")

router.get('/',(req,res)=>{
    res.send("this is first");    
})

router.get('/getName',(req,res)=>{
    // console.log(db)
    const result = {
        name:"johnny",
        id:"1"
    }
    
    
    if(res.status = 200){
        res.json({data:{a:"1",b:"2"}})
    }else{
        console.log(err.stack);
    }
    
    // res.json({ username: 'Flavio' })

    // console.log(err.stack);
    
},(req,res)=>{

})

module.exports = router;

