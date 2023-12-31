import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import { toast } from 'react-toastify'

const Register = () => {

const [userData,setUserData]=useState({
    name:"",
    email:"",
    password:""
})

const navigate = useNavigate()

const HandleChange = (e)=>{
setUserData({
    ...userData,
    [e.target.name]:e.target.value
})
}

const Handlesubmit = async(e)=>{
    e.preventDefault()

    try {
        const data = await axios.post(`http://localhost:8080/api/v1/register`,userData)
        console.log(data)
        if(data.status==200){
          toast.success('registered succefully')
            navigate('/login')
        }
    } catch (error) {
        toast.error('something went wrong')
        
    }
}

console.log(userData)

    return <>
    <Header />
    <div className='register'>
    <form onSubmit={Handlesubmit}>
    <div className="mb-3">
      <label htmlFor="exampleInputtext" className="form-label">Your Name</label>
      <input type="text" className="form-control" id="exampleInputtext" name='name' value={userData.name} onChange={HandleChange} required/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={userData.email} onChange={HandleChange} required/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={userData.password} onChange={HandleChange} required/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
    </div>
    </>
    
}

export default Register
