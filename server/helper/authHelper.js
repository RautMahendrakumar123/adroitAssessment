const bcrypt = require('bcrypt')


const EncryptPassword = async(password)=>{
try {
    const saltround = 8;
    return await bcrypt.hash(password,saltround)
    
} catch (error) {
    console.log(error)
}
}

const comparePassword = async(password,hashPassword)=>{
    try {
        return bcrypt.compare(password,hashPassword)
    } catch (error) {
        console.log(error)
    }
}

module.exports={EncryptPassword,comparePassword}