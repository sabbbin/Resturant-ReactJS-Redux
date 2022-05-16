import React from 'react'
import './sidebar.css'

export  function Sidebar() {
  return (
   <>
   
     <h4 className='text-center'> Calculate Bills</h4>
     <div className='row '>
       <div className="items-right">

        <label className='px-3'>Total bill</label>
        <input type='text'  style={{width:120}} value='Rs:2000' /> 
       </div>

    </div>
   </>
  )
}
