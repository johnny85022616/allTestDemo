module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type:type.STRING
        },
        phone:{
          type:type.STRING
        },
        identityNumber:{
          type:type.STRING,
          unique:true
        }        
    })
}