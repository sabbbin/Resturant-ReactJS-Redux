import React from 'react'
import { connect } from 'react-redux'
import './sidebar.css'

function SidebarComponent(props) {
  return (
   <>
   
     <h4 className='text-center'> Calculate Bills</h4>
     <div className='row '>
       <div className="items-right">

        <label className='px-3'>Total bill Rs:</label>
        <input type='text'  className='inputtotal' style={{width:120}} value= {props.price} /> 
       </div>

    </div>
   </>
  )
}
const mapStateToProps=(rootStore)=>({
  price:rootStore.Total.totalprice
})
const mapDispatchToProps={

}

export const Sidebar= connect( mapStateToProps,mapDispatchToProps)(SidebarComponent)