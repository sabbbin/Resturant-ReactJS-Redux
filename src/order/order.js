import React from 'react'

export default function Order() {
   let orders= JSON.parse( localStorage.getItem('_orders'))
   
   console.log(orders)
  return (
    <>
    <div className='row'>
        <div className='col'>
            <table className='table table-stiped'>
                <thead>
                    <tr>
                        <td>S.N</td>
                        <td>Image</td>
                        <td>price</td>
                        <td>qty</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                {orders && orders.map((order ,i)=>(                
                    <tr key={i}>
                    <td key={order._id}>{i+1}</td>
                    <td><img className='img-fluid' style={{height:60, width:60}} src={process.env.PUBLIC_URL+`${order.img}` }></img></td>
                    <td>{order.pric}</td>
                    <td>{order.qty}</td>
                    <td>{order.total}</td>
                    </tr>
                ))}

                </tbody>

            </table>
       


        </div>
        
    </div>
    </>
  )
}
