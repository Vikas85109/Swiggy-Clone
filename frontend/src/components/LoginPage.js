import React from "react";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.content}>
      <div className={styles.loginPage}>
        <div className={styles.mainContent}>
          <div className={styles.cross}>X</div>
          <div className={styles.heading}>
            <div className={styles.loginComp}>
              <div style={{ fontSize: "30px" }}>Login</div>
              <div style={{display:"flex"}}>
                or 
                <span style={{ color: "#fc8019" , marginLeft:"5px"}}>create an account</span>
              </div>
            </div>
            <div style={{marginLeft:"auto", borderRadius:"50%"}}>
              <img src="./loginLogo.png" alt="" />
            </div>
          </div>
          <form className={styles.formEle}>
            <input
              className={styles.email}
              placeholder="Phone number"
              type="text"
            />
            <button className={styles.btn}>LOGIN</button>
            <div className={styles.tnc}>
              By clicking on Login, I accept the
              <a  href="/terms-and-conditions">
                Terms &amp; Conditions
              </a>
              &amp;
              <a  href="/privacy-policy">
                Privacy Policy
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
