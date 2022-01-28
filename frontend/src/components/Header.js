import React from "react";

import Styles from "./Header.module.css";

function Header() {
  return (
    <>
    <nav>
    <img src="./swiggy.png" alt="" />
    <ul className={Styles.ul}>
    <li>Search</li>
    <li>Offers</li>
    <li>Help</li>
    <li>Username</li>
    <li>Cart</li>
    </ul>
    </nav>




      {/* <div className={Styles.header}>
      <div className={Styles.leftheader}>
          <div className={Styles.left}>
          <div className={Styles.logo}>
            <img src="./swiggy.png" alt="" />
          </div>
          <div className={Styles.location}>
            <div> Gurgaon</div>
            <div className="state">Haryana,india</div>
          </div>
          </div>
        </div>
       
        <div className={Styles.rightheader}>
          
        </div>
      </div> */}
    </>
  );
}

export default Header;
