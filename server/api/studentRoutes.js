const router = require('express').Router();
const {students} = require('../db/index');


router.get('/', async (req,res,next)=>{
  try {
    let allStudents = await students.findAll()
    res.json(allStudents)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
