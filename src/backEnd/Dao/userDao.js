import Module from '../establishment.js';

const insertUser = (memberList)=>{
    Module.User.bulkCreate(
        memberList
    ).then(result => {
        console.log(result)
        }).catch(err => {
        console.log(err)
    });
}

const findOneByIdentity = async(loginData)=>{
    return await Module.User.findOne({
        where:{
            identityNumber:loginData.identityNumber
        }
    })
}

const findOneByName = async(loginData)=>{
    return await Module.User.findOne({
        where:{
            name:loginData.name
        }
    })
}

const findAllUser = async()=>{
    const user = await Module.User.findAll({raw:true});
    console.log(user);
    return user;
    ;
}

const deletUser = (deleteMemberLidst)=>{
   
    deleteMemberLidst.forEach(element => {
        console.log(element);
        Module.User.destroy({
            where:{
                identityNumber:element.identityNumber
            }
        }).then(result=>{
            console.log(result)
        }).catch(err => {
            console.log(err)
        });
    });
}

const updateUser = (updateUser)=>{
    console.log(updateUser)
    Module.User.update(updateUser,{
        where:{
            identityNumber:updateUser.identityNumber
        },
        returning:true
    }).then(result => {
        //console.log(result)
    }).catch(err=>{
        console.log(err);
    });
}

export {
    insertUser,
    findAllUser,
    deletUser,
    updateUser,
    findOneByIdentity,
    findOneByName
}