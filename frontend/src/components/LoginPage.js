import React from "react";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.content}>
      <div className={styles.loginPage}>
        <div className={styles.mainContent}>
          <div className={styles.heading}>
            <div className={styles.cross}>X</div>
            <div className={styles.loginComp}>
              <div style={{ fontSize: "30px" }}>Login</div>
              <div>
                or
                <div style={{ color: "black" }}>create an account</div>
              </div>
            </div>
            <img src="./images/img1.jpg" alt="roll"></img>
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
