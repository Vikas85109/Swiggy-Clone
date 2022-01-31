import React, { useEffect, useState } from 'react';
import styles from './ProductPage.module.css';
import { useParams } from 'react-router-dom';
import data from '../data'
import Dishes from './Dishes';
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
                    <div style={{margin:"10px 0px", fontSize:"32px" , color:"#fff"}}>{product.name}</div>
                    <div style={{color:"#A8A9AE"}}>{product.cuisine}</div>
                    <div style={{margin:" 10px 0px", fontSize:"14px", color:"#A8A9AE"}}>Address</div>
                    <div className={styles.miss}>
                        <div style={{padding:"0px 35px 0px 0px"}}>
                            <div style={{fontSize:"16px", fontStyle:"bold"}}>
                                <i className="fa fa-star-o" style={{color:"white"}}></i>
                                <span style={{marginLeft:"5px", color:"#fff"}}>{product.rating}</span>
                            </div>
                            <div style={{marginTop:"3px", color:"#A8A9AE"}}>5000+ Rating</div>
                        </div>
                        <div style={{padding:"0px 35px", borderLeft:"1px solid #535665", borderRight:"1px solid #535665"}}>
                            <div style={{fontSize:"16px", marginBottom:"3px", color:"#fff"}}>{product.timing}  mins</div>
                            <div style={{color:"#A8A9AE"}}>Delivery timing</div>
                        </div>
                        <div style={{padding:"0px 0px 0px 35px"}}>
                            <div style={{fontSize:"16px", marginBottom:"3px", color:"#fff"}}>{product.price}</div>
                            <div style={{color:"#A8A9AE"}}>Cost for two</div>
                        </div>
                    </div>
                </div>
                <div className={styles.offer}>
                    <div style={{}}>
                        <div className={styles.offer_h}>OFFER</div>
                        <div style={{padding:"50px 25px", border:"1px solid #fff",}}>
                            <span class="icon-offer-filled _26GkL"></span>
                            <div style={{alignItems:"center",fontSize:"14px"}}>15% off upto ₹100 | Use SBIC100 Above ₹400</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.leftBar}>
                    1
                </div>
                <div className={styles.dishes}>
                    <div style={{padding:"17px 0px 2px", fontSize:"32px", fontWeight:"bolder"}}>Recommended</div>
                    <div style={{padding:"0px 0px 30px", color:"#A8A9AE", fontSize:"13px"}}>32 ITEMS</div>
                    <Dishes></Dishes>
                </div>
                <div className={styles.cart}>
                    3
                </div>
            </div>

        </div>
      </>
  );
}
