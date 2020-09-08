import express from "express"
var router = express.Router()

router.get('/',(req,res)=>{
    res.send("this is first");    
})

router.get('/getName',(req,res)=>{
    res.send("this is Johnny");    
})

export default router;

