const Sequelize = require ('sequelize')
const db = require('../database')

module.exports = db.define('campuses', {
  name:{
    type:Sequelize.STRING,
    allowNull:false
  },
  imageUrl:{
    type:Sequelize.STRING,
    defaultValue:'https://images.adsttc.com/media/images/5ab2/3b63/f197/cc7d/4900/017f/newsletter/MB_Bard_3.jpg?1521630004'
  },
  address:{
    type:Sequelize.STRING,
    allowNull:false
  },
  description:{
    type:Sequelize.TEXT
  }
})
