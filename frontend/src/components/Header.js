import React from "react";

import Styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={Styles.main_header}>
        <div className={Styles.header_left}>
          <div className={Styles.logo}>
            <img src="./swiggy.png" alt="" />
          </div>
          <div className={Styles.location}>
            <span className={Styles.underline}> Gurugram</span> Haryana,india
          </div>
        </div>

        <div className={Styles.header_right}>
          <nav className="navbar">
            <ul className={Styles.ul}>
              <li className="">Search</li>

              <li>
                {" "}
                Offers<sup>NEW</sup>
              </li>
              <li>Help</li>
              <li>UserName</li>
              <li>Cart</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
