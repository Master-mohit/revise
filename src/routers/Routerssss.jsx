import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Props from '../components/Props'
import Context from '../components/Context'
import Api from '../components/Api'

const Routerssss = () => {
  return (
    <div>
      <Routes>
      <Route path='/props' Component={Props}/>
      <Route path='/context' Component={Context}/>
      <Route path='/api' Component={Api}/>
      </Routes>
    </div>
  )
}

export default Routerssss
