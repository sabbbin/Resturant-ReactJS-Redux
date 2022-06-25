import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTotal } from "../../action/totalaction";

import "./sidebar.css";

function SidebarComponent(props) {
  const navigate = useNavigate()

  const handleCheckout=()=>{
    localStorage.clear()
    props.setTotal(0)
    navigate('/')
  }
  const handleView=()=>{
    console.log('abc')
    navigate('/order')
  }
  return (

    <>
    <div className="sidebar">
     <div className="bill">
    <h5>Bill Amount</h5>
     <div className="bill_amount">

       <h6>Total Bill Rs:</h6>
       <input 
        type="text"
        className="inputtotal"
     
        value={props.price}
        disabled
       />
     </div>
       <div className="bill_btn">

       <button onClick={handleCheckout} className="btn btn-info">checkout</button>
        <button onClick={handleView} className="btn btn-danger">view order</button>
       </div>


      </div>      

    </div>
    
    </>
    // <>
    //   <div className="row" id="sidebarrow">
    //     <h4 className="text-center my-4"> Calculate Bills</h4>

    //     <div className="items-right">
    //       <label className="px-3">Total bill Rs:</label>
    //       <input
    //         type="text"
    //         className="inputtotal"
    //         style={{ width: 120 }}
    //         value={props.price}
    //       />
    //     </div>
    //     <div className="d-flex justify-content-evenly mt-5">
    //       <button onClick={handleCheckout} className="btn btn-info">checkout</button>
    //       <button onClick={handleView} className="btn btn-danger">view order</button>
    //     </div>
    //   </div>
    // </>
  );
}
const mapStateToProps = (rootStore) => ({
  price: rootStore.Total.totalprice,
});
const mapDispatchToProps = {
  setTotal:getTotal
};

export const Sidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarComponent);
