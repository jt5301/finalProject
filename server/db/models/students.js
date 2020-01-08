const Sequelize = require('sequelize')
const db = require ('../database')

module.exports = db.define('students', {
  firstName:{
    type:Sequelize.STRING,
    allowNull:false
  },
  lastName:{
    type:Sequelize.STRING,
    allowNull:false
  },
  email:{
    type:Sequelize.STRING,
    allowNull:false,
    validate:{
      isEmail:true
    }
  },
  imageUrl:{
    type:Sequelize.STRING,
    allowNull:false,
    defaultValue:'https://thesocietypages.org/socimages/files/2009/05/twitter.png'
  },
  gpa:{
    type:Sequelize.FLOAT,
    validate:{
      min:0.0,
      max:4.0
    }
  },
})
