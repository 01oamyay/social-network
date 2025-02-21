"use client";

import Image from "next/image";
import styles from "./navbar.module.css";
import { useState } from "react";
import AddIcon from "../../icons/add";
import MessageIcon from "../../icons/message";
import NotificationIcon from "../../icons/notification";
import { usePathname } from "next/navigation";
import excludes from "@/app/utils/excludes";

export default function Navbar() {
  const [dropDownActive, setDropDownActive] = useState(false);

  if (excludes.layoutExclude(usePathname())) return null;

  function toggleDropDown() {
    setDropDownActive(!dropDownActive);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.right}>
        <input
          type="text"
          placeholder="Search"
          className={styles.search_input}
        />
      </div>
      <div className={styles.left}>
        <div className={styles.navlinks}>
          <AddIcon />
          <MessageIcon />
          <NotificationIcon />
        </div>
        <div className={styles.user} onClick={toggleDropDown}>
          <Image
            src="https://preline.co/assets/img/160x160/img1.jpg"
            alt="User"
            width={35}
            height={35}
          />
        </div>
        <div
          className={`${styles.drop_down} ${
            dropDownActive ? styles.active : ""
          }`}
        >
          <div className={styles.dropdown_content}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
