import React from 'react';

import Cartstyles from "./Cart.module.css"

export default function Cart() {
  return <div>
    <div className={Cartstyles.main_part}>
      <div className={Cartstyles.left_part}>
      <h2>Restaurant name</h2>
      <p className={Cartstyles.textttt}>
       Restaurant is no taking new orders.
      </p>
      
    <div className={Cartstyles.text}>
        <h4>Add New Address</h4>
        <div className="small">
          Gurgaon, Haryana, India
        </div>
        <div className="addnew">
          ADD NEW
        </div>
      </div> </div>
      <div className={Cartstyles.address}>
        <h1>Delivery Address</h1>
      </div>
      <div className={Cartstyles.address}>
        <h1>Payment</h1>
      </div>
     <div className={Cartstyles.right_part}>
       <div className={Cartstyles.right_text}>
        <h4> Biryani Blue</h4>
         <p className="right_text_address">
          <u> Sector 4</u>
         </p>
       </div>
     </div>

    </div>
  </div>;
}

