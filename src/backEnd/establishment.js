const Sequelize = require('sequelize')
const UserModel = require('./models/user')
const propertiesReader = require('properties-reader');

let properties = process.env.NODE_ENV === "production" ? propertiesReader('./production.properties'):propertiesReader('./development.properties');
let databaseName = properties.get("database.name");
let databaseUser = properties.get("database.user");
let databasePassword = properties.get("database.password");
let databaseHost = properties.get("database.host")
let databaseDialect = properties.get("database.dialect");
const sequelize = new Sequelize(databaseName, databaseUser, databasePassword, {
  host: databaseHost,
  dialect: databaseDialect,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const User = UserModel(sequelize, Sequelize)
// BlogTag will be our way of tracking relationship between Blog and Tag models
// each Blog can have multiple tags and each Tag can have multiple blogs
// const BlogTag = sequelize.define('blog_tag', {})
// const Blog = BlogModel(sequelize, Sequelize)
// const Tag = TagModel(sequelize, Sequelize)

// Blog.belongsToMany(Tag, { through: BlogTag, unique: false })
// Tag.belongsToMany(Blog, { through: BlogTag, unique: false })
// Blog.belongsTo(User);

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  User:User
}