const router = require('express').Router();
const {campuses} = require('../db/index');


router.get('/', async (req,res,next)=>{
  try {
    let allCampuses = await campuses.findAll()
    res.json(allCampuses)
  } catch (error) {
    console.log(error)
  }

})

module.exports = router
