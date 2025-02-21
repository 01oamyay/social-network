"use client";

import Image from "next/image";
import styles from "./setup.module.css";
import redirects from "@/app/utils/redirects";

export default function SetupProfile() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.header_h1}>Setup Profile</h1>
        {/* Avatar/Image */}
        <div className={styles.avatar_div}>
          <label htmlFor="profile_picture">Profile Picture (Optional):</label>
          {/* Placeholder to display the selected image */}
          <Image
            src="https://preline.co/assets/img/160x160/img1.jpg"
            alt="Preview"
            width={100}
            height={100}
            id="preview_image"
            className={styles.avatar}
            priority
          />

          <input
            type="file"
            id="profile_picture"
            name="profile_picture"
            accept="image/*"
            className={styles.avatar_input}
          />
        </div>

        {/* Nickname */}
        <div className={styles.input_div}>
          <label className={styles.label} htmlFor="nickname">
            Nickname (Optional):
          </label>
          <input
            className={styles.input}
            type="text"
            id="nickname"
            name="nickname"
          />
        </div>

        {/* About Me */}
        <div className={styles.input_div}>
          <label className={styles.label} htmlFor="about_me">
            About Me (Optional):
          </label>
          <textarea
            className={styles.input}
            id="about_me"
            name="about_me"
            rows="4"
          ></textarea>
        </div>

        <div className={styles.actions_div}>
          <a
            className={styles.a_skip}
            id="go_home"
            onClick={redirects.handleProfileBtn}
          >
            Skip
          </a>
          <button className={styles.btn} type="submit">
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
}
