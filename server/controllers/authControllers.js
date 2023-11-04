const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const  EncryptPassword = require('../helper/authHelper');
const userModel = require('../models/userModel')

const registerController = async (req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password){
           return  res.status(400).json({error :'missing data'})
        }
        const userExist = await userModel.findOne({email})
        if(userExist){
           return res.status(401).json({error:'user already exist'})
        }
        const hashpass = await EncryptPassword(password)

        const user = await new userModel({
            name,
            email,
            password:hashpass
        })
        await user.save()
        res.status(200).json({
            message:'user registered successfully',
            user
        })
        
    } catch (error) {
        res.status(500).send('something went wrong')
        console.log(error)
    }
}

const loginController = async (req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
           return res.status(400).json({error:'missing data'})
        }
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(400).json({error:'user not found'})
           
        }
        const compare = await bcrypt.compare(password,user.password)
        if(!compare){
           return res.status(400).json({error:'invalid password'})
        }
        const token  = jwt.sign({_id:user._id},process.env.SECRET_KEY)
        res.status(200).json({
            message:'user login successfull',
            token:token,
            user
        })
        
    } catch (error) {
        res.status(500).json({error:'something went wrong'})
        console.log(error)
    }
}

module.exports = {registerController,loginController}