import React, { useEffect, useState } from 'react';
import data from '../data'

import stylyecont from "./Content.module.css";
import Product from "./Product"
export default function Content() {
  const [productArr,setProductArr]=useState([]);
  useEffect(()=>{
    console.log(data);
    setProductArr(data.restaurants);
    console.log(productArr);
  },[]);
  return (
    <div className={stylyecont.contentpart}>
        {
          productArr.map(product =>
              <Product
                id={product.id}
                key={product.id}
                name={product.name}
                cuisine={product.cuisine}
                brand={product.brand}
                price={product.price}
                images={product.image}
                timing={product.timing}
                rating={product.rating}
              />
            )
        }
      {/* <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/> */}
    
      
      
    </div>

  )
}
