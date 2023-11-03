import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

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
                const data = await axios.post(`http://localhost:8080/api/v1/login`,userData)
                console.log(data)
                if(data.data){
                    navigate('/')
                }
                
            } catch (error) {
                console.log(error)
                
            }
        }

  return <div className='login'>
  <form onSubmit={Handlesubmit}>
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
}

export default Login
