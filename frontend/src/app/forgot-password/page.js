"use client";

import redirects from "../utils/redirects";
import styles from "./forgot.module.css";

export default function ForgotPassword() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.header_h1}>Forgot Password</h2>
        <input
          className={styles.input}
          type="email"
          placeholder="Enter your email"
        />
        <button className={styles.btn}>Send Reset Link</button>
        <a
          className={styles.a_return_login}
          id="return_login"
          onClick={redirects.handleAuthBtn}
        >
          Return to login
        </a>
      </form>
    </div>
  );
}
