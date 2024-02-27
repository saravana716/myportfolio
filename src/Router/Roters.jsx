import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyProfile from '../Component/MyProfile/MyProfile'
import About from '../Component/About/About'
import MyProtfolio from '../Component/myPortfolio/MyProtfolio'
import Skills from '../Component/Skills/Skills'
import Education from '../Component/Education/Education'
import Contact from '../Component/Contact/Contact'
import Loader from '../Component/loader/Loader'
import Myresume from '../Component/myresume/Myresume'

const Roters = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Loader />}/>
        <Route path='/home' element={<MyProfile />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/Portfolio' element={<MyProtfolio />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/education' element={<Education />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/resume' element={<Myresume />}/>
    </Routes>
     </BrowserRouter>
    </>
  )
}

export default Roters