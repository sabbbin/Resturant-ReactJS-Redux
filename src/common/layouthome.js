import React from 'react'
import { TopNavbar } from '../header/topnavbar'
import { Sidebar } from './sidebar/siderbar'
import './common.css'
import { Outlet } from 'react-router-dom'


export default function HomeLayout() {
  return (
    <>
     <TopNavbar />
      <div className='container_page'>
        <div className='wrapper'>
          <div className='content_left'>
            <h5>Select the Food Items</h5>
              <Outlet />
          </div>
          <div className='content_right'>
            
          <Sidebar />
          </div>

        </div>

      </div>
    </>
  )
}
