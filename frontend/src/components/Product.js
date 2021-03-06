import React from 'react';
import {Link} from 'react-router-dom'

// import Styles from "./Header.module.css";

import styles from './Product.module.css';
// import {Link} from 'react-router-dom'
export default function Product({id,name,cuisine,rating,price,images,timing}) {
  return (
      <Link to={`/product/${id}`}>
        <div className={styles.product}>
            <div className={styles.mainContent}>
                    <div className={styles.header}>
                        <img className='img' src={images}
                                alt='product'/>
                    </div>
                    <div className={styles.title}>
                            <div className={styles.details}>
                                <h2 style={{fontSize: "17px"}}>
                                    {name}
                                </h2>
                                <div style={{fontSize:"13px",margin:"4px 0px 0px"}}>{cuisine}</div>
                            </div>
                            <div className={styles.wrapper}>
                                <div className={styles.rating}>
                                    <i className="fa fa-star-o" style={{background:"#db7c38", color:"white"}}></i>
                                    <span style={{marginLeft:"5px"}}>{rating}</span>
                                </div>
                                <div>•</div>
                                <div className={styles.timing}>44 MINS</div>
                                <div>•</div>
                                <div className={styles.price}>₹350 FOR TWO</div>
                            </div>
                            <div className={styles.discount}>
                                <span>10% off | Use TRYNEW</span>
                            </div>
                    </div>
            </div>
            <div className={styles.quickView}>
                    <span  style={{color:"#5d8ed5",margin:"0 auto"}}>
                            QUICK VIEW     
                    </span>
            </div>
        </div>
      </Link>
  )
}






