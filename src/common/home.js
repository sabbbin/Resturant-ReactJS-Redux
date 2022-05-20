import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTotal } from "../action/totalaction";
function HomeComponent(props) {
  const foods = [
    {
      _id: 1,
      img: "img/food1.jpeg",
      des: "this is best food",
      pric: 200,
      status: true,
    },
    {
      _id: 2,
      img: "img/food2.png",
      des: "this is best food",
      pric: 300,
      status: true,
    },
    {
      _id: 3,
      img: "img/food3.jpeg",
      des: "this is best food",
      pric: 250,
      status: true,
    },
    {
      _id: 4,
      img: "img/food4.jpeg",
      des: "this is best food",
      pric: 180,
      status: true,
    },
    {
      _id: 5,
      img: "img/food4.jpeg",
      des: "this is best food",
      pric: 180,
      status: true,
    },
    {
      _id: 6,
      img: "img/food4.jpeg",
      des: "this is best food",
      pric: 180,
      status: true,
    },
    {
      _id: 7,
      img: "img/food4.jpeg",
      des: "this is best food",
      pric: 180,
      status: true,
    },
    {
      _id: 8,
      img: "img/food4.jpeg",
      des: "this is best food",
      pric: 180,
      status: true,
    }, {
      _id: 9,
      img: "img/food4.jpeg",
      des: "this is best food",
      pric: 180,
      status: true,
    }, {
      _id: 10,
      img: "img/food4.jpeg",
      des: "this is best food",
      pric: 180,
      status: true,
    }
  ];
  const [item, setItem] = useState(foods);
  const [price, settotalprice] = useState(0);
  const [quantity, setQuantity]= useState(0)
  useEffect(() => {
    settotalprice(props.price);
    console.log(price);
  }, [props]);

  const buttonclick = (e) => {
    let existing_cart = JSON.parse(localStorage.getItem("_orders")) || [];
    let index=null
    existing_cart.map((item,i)=>{
        if (i==e){
          index=i
        }
      })
      if (index!=null){
          
        existing_cart[index]['status']=!existing_cart[index]['status']
        existing_cart[index]['qty']=quantity
        existing_cart[index]['total']=existing_cart[index]['pric']*quantity
        settotalprice(existing_cart[index]['total'])
        let sum = existing_cart[index]['total'] + props.price;

        props.getTotalfun(sum);
  
        
        localStorage.setItem("_orders", JSON.stringify(existing_cart));

      }
      else{
        let single_item = item.filter((ite) => ite._id == e);
        let orderitem = single_item[0];
        orderitem['status']=!orderitem['status']
        orderitem['qty']=quantity
        orderitem['total']=orderitem['pric']*quantity
        console.log(orderitem['total'])
        settotalprice(orderitem['total'])
        let sum = orderitem['total'] + props.price;

        props.getTotalfun(sum);
        
        existing_cart.push(orderitem);
        localStorage.setItem("_orders", JSON.stringify(existing_cart));
      }

     
    



    
  
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {item &&
            item.map((prod, ind) => (
              <div
                key={ind}
                className="col-xl-2 col-lg-3 col-md-5 col-sm-5 p-2"
              >
                <div className="card mb-5 text-center">
                  <div className="card-body">
                    <div className="card-title">
                      <img
                        height={90}
                        width={120}
                        src={process.env.PUBLIC_URL + prod.img}
                      ></img>
                    </div>
                    <h6> {prod.des}</h6>
                    <h6>Rs: {prod.pric}</h6>
                    
                    <div className="d-flex justify-content-between">

                    
                    <input type='number' style={{textAlign:"right", width:70}} defaultValue={0
                    } min={1} max={5} onChange={(e)=>setQuantity(e.target.value)} placeholder="quantity" /> 
                    {prod.status?(
                    <button
                      type="button"
                      onClick={() => {
                        buttonclick(prod._id);
                       }}
                      className="btn btn-secondary"
                    >
                      
                      Order
                    </button>
                    ): (
                    <button
                      type="button"
                      onClick={() => {
                        buttonclick(prod._id);
                       }}
                      className="btn btn-secondary"
                    >
                   
                      Cancel
                    </button>
                    )}
                     </div>
                    
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (rootStore) => ({
  price: rootStore.Total.totalprice,
});
const mapDispatchToProps = {
  getTotalfun: getTotal,
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
