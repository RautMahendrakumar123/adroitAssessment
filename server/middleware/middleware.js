const jwt = require('jsonwebtoken')


const requireSignIn = async(req,res,next)=>{
try {
    const decode = jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
    req.user=decode
    next()
} catch (error) {
    console.log(error)
    res.json({error:'error in signin'})
}
}

module.exports=requireSignIn