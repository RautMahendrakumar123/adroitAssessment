import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './component/Login'
import Register from './component/Register'
import Saved from './pages/Saved'
import ContextProvider from './contex/Context'

const AppRouter = () => {

  return (
    <BrowserRouter>
    <ContextProvider >
    <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/saved' element={<Saved />}/>
    </Routes>
    </ContextProvider>
    </BrowserRouter>
    
  )
}

export default AppRouter
