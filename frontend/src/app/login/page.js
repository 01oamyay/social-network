"use client";

import redirects from "../utils/redirects";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.header_h1}>Login</h1>
        <input
          className={styles.input}
          type="text"
          placeholder="Email / Username"
        ></input>
        <input
          className={styles.password_input}
          type="password"
          placeholder="Password "
        ></input>
        <a
          className={styles.a_forgot_password}
          id="forgot_password"
          onClick={redirects.handleAuthBtn}
        >
          Forgot your password?
        </a>
        <button className={styles.btn}>Sign In</button>
        <button
          className={`${styles.btn} ${styles.register}`}
          id="register_redirect"
          onClick={redirects.handleAuthBtn}
        >
          Register
        </button>
      </form>
    </div>
  );
}
