"use client";

import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.right}>
        <h1>Logo</h1>
        <div className={styles.search}>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className={styles.left}>
        <div className={styles.navlinks}>
          <a href="#">Add</a>
          <a href="#">Messages</a>
          <a href="#">Notification</a>
        </div>
        <div className={styles.user}>
          <Image
            src="https://preline.co/assets/img/160x160/img1.jpg"
            alt="User"
            width={25}
            height={25}
          />
          <a>D</a>
        </div>
        <div className={styles.drop_down}>
          <div className={styles.dropdown_content}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
