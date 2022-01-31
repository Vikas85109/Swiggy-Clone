import React, { useEffect, useState } from 'react';
import styles from './ProductPage.module.css';
import { useParams } from 'react-router-dom';
import data from '../data'
export default function ProductPage() {
    let params=useParams();
    let [product,setProduct]=useState({});
    const {restaurants}=data;
    useEffect(()=>{
        // console.log(restaurants)
        let p=restaurants.filter(items=> items.id==params.id);
        setProduct(p[0]);
        console.log(product);
    },[])
    console.log(product)
  return (
      <>
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.img}>
                    <img src={product.image} alt='image'/>
                </div>
                <div className={styles.details}>
                    <div style={{margin:"10px", fontSize:"32px"}}>{product.name}</div>
                    <div>{product.cuisine}</div>
                    <div style={{margin:"10px", fontSize:"32px"}}>Address</div>
                    <div className={styles.miss}>
                        <div style={{padding:"0px 35px 0px 0px"}}>
                            <div style={{fontSize:"16px", fontStyle:"bold"}}>
                                <i className="fa fa-star-o" style={{background:"#db7c38", color:"white"}}></i>
                                <span style={{marginLeft:"5px"}}>{product.rating}</span>
                            </div>
                            <div style={{marginTop:"3px"}}>5000+ Rating</div>
                        </div>
                        <div style={{padding:"0px 35px", borderLeft:"1px solid #535665", borderRight:"1px solid #535665"}}>
                            <div style={{fontSize:"16px", marginBottom:"3px"}}>{product.timing}  mins</div>
                            <div>Delivery timing</div>
                        </div>
                        <div style={{padding:"0px 0px 0px 35px"}}>
                            <div style={{fontSize:"16px", marginBottom:"3px"}}>{product.price}</div>
                            <div>Cost for two</div>
                        </div>
                    </div>
                </div>
                <div className={styles.offer}>

                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.leftBar}>

                </div>
                <div className={styles.dishes}>

                </div>
                <div className={styles.cart}>

                </div>
            </div>

        </div>
      </>
  );
}
