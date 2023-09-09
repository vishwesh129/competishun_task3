import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Calorie from './Calorie'
import Diet from './Diet'

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/calorie' element={<Calorie/>}/>
        <Route path='/diet' element={<Diet/>}/>
      </Routes>
    </div>
  )
}
