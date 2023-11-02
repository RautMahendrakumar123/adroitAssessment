const express = require('express')
const { registerController, loginController } = require('../controllers/authControllers')
const router = express.Router()

//example
router.get('/get',(req,res)=>{
res.send('new got it')
})

//
router.post('/register',registerController)
router.post('/login',loginController)

module.exports=router;