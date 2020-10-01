var Module = require('../establishment.js');

const insertUser = (memberList)=>{
    Module.User.bulkCreate(
        memberList
    ).then(result => {
        console.log(result)
        }).catch(err => {
        console.log(err)
    });
}

module.exports={
    insertUser:insertUser,
}