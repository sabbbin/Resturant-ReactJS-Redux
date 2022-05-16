import React, { useEffect, useState } from "react";
import {connect} from  'react-redux'
import { getTotal } from "../action/totalaction";
function HomeComponent(props) {
  

    const foods=[{
        _id:1,
        img:'img/food1.jpeg',
        des:'this is best food',
        pric:200
    },
    {
        _id:2,
        img:'img/food1.jpeg',
        des:'this is best food',
        pric:200
    },
    {
        _id:3,
        img:'img/food1.jpeg',
        des:'this is best food',
        pric:200
    }]
    const [item, setItem]= useState(foods)
   const[price, totalprice]= useState(0)

   useEffect(()=>{
     totalprice(props.price)
     console.log(price)

   },[])

   const buttonclick=(e)=>{
     let sum=e+props.price
     console.log(props.price)
       props.getTotalfun(sum)
       
   }

  return (
    <>
      <div className="container">
        <div className="row">

             { item && item.map((prod,ind)=>(

          <div key={ind} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 p-2">
            <div className="card mb-5 text-center">
              <div className="card-body">
                <div className="card-title">
                  <img  height={90} src={process.env.PUBLIC_URL + prod.img}></img>
                </div>

                <h6> {prod.des}</h6>

                <h6>Rs: {prod.pric}</h6>
                <button type="button" onClick={()=>{buttonclick(prod.pric)}} className="btn btn-secondary" >  buy</button>
              </div>
            </div>
        </div>
             ))}
       
          
          
        </div>
      </div>
    </>
  );
}
const mapStateToProps=(rootStore)=>({
  price:rootStore.Total.totalprice
})
const mapDispatchToProps={
  getTotalfun:getTotal
}



export const Home= connect(mapStateToProps, mapDispatchToProps) (HomeComponent)