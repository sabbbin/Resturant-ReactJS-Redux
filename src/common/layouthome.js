import React from 'react'
import { TopNavbar } from '../header/topnavbar'
import { Sidebar } from './sidebar/siderbar'
import './common.css'
import { Outlet } from 'react-router-dom'
import {Home} from './home'

export default function HomeLayout() {
  return (
    <>
    <TopNavbar />
    <div className='container-fluid '>
      <div className='row' id='mainpage'>
        <div className='col-12 mt-5'>
            <h2 id='title-name'> Enjoy your best Meal</h2>
        </div>
        <div className='d-flex justify-content-evenly mt-4 '>

        <div className='col-sm-8' >
          <h3 className='text-center'> Check Menu</h3>
          <div id='main-content'>

          <Outlet />
          </div>
        </div>
        <div className='col-sm-3 ' >
                 <h3 className='text-center'>Check Bill</h3>
                 <div id='sidebar'>
                   <Sidebar />
                 </div>
        </div>
        </div>

      </div>

    </div>
    
    </>
  )
}
