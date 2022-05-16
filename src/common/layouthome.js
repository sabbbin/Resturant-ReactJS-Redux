import React from 'react'
import { TopNavbar } from '../header/topnavbar'
import { Sidebar } from './sidebar/siderbar'
import './common.css'
import { Outlet } from 'react-router-dom'
import Home from './home'

export default function HomeLayout() {
  return (
    <>
    <TopNavbar/>
    <div className='container-fluid'>
   <div className='row'>
          <div className='col-sm-7 mx-1 px-2 border'>
              <Home />
          </div>
          <div className='col-sm-3 mx-1 px-2 border '>
              <Sidebar />
          </div>
   </div>
   </div>
    </>
  )
}
