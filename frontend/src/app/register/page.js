"use client";

import styles from "./signup.module.css";
import redirects from "../utils/redirects";

export default function Signup() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.header_h1}>Register</h1>
        <input className={styles.input} type="text" placeholder="First name" />
        <input className={styles.input} type="text" placeholder="Last name" />
        <input className={styles.input} type="date" placeholder="Birthdate" />
        <input className={styles.input} type="email" placeholder="Email" />
        <input
          className={styles.input}
          type="password"
          placeholder="Password "
        />
        <button className={styles.btn}>Register</button>
        <button
          className={`${styles.btn} ${styles.login}`}
          onClick={redirects.handleAuthBtn}
          id="sign_in_redirect"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
