const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const connectDB = require('./database/db')
const authroute = require('./routes/authRoutes')

app.use(express.json())
app.use(cors())

//database connection
connectDB()

//example
app.get('/',(req,res)=>{
    res.send('got it')
})

//routes
app.use('/api/v1',authroute)

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})


