"use client";

import React from "react";
import styles from "./nav.module.css";
import excludes from "@/app/utils/excludes";
import { usePathname } from "next/navigation";
import HomeIcon from "@/app/components/icons/home";
import FollowersIcon from "@/app/components/icons/followers";
import EventsIcon from "@/app/components/icons/events";
import SavedIcon from "@/app/components/icons/saved";
import SettingsIcon from "@/app/components/icons/settings";
import { useRouter } from "next/navigation";

const elements = [
  { id: 1, name: "Home", icon: <HomeIcon />, link: "/" },
  {
    id: 2,
    name: "Following",
    icon: <FollowersIcon />,
    link: "/profile/following",
  },
  { id: 3, name: "Events", icon: <EventsIcon />, link: "/events" },
  { id: 4, name: "Saved", icon: <SavedIcon />, link: "/profile/saved" },
  { id: 5, name: "Settings", icon: <SettingsIcon />, link: "/settings" },
];

export default function NavSideBar() {
  const pathname = usePathname();
  const router = useRouter();
  const activeElement = elements.find((element) => element.link === pathname);

  function NavSideRedirect(e) {
    e.preventDefault();
    let target = e.currentTarget;
    let link = target?.dataset?.link;
    if (link) {
      router.push(link);
    }
  }

  if (excludes.layoutExclude(pathname)) return null;

  return (
    <div className={styles.nav_sidebar}>
      <div className={styles.logo}>
        <h1>Logo</h1>
      </div>
      <div className={styles.nav__list}>
        {elements.map((element) => (
          <div
            key={element.id}
            className={`${styles.nav__item} ${
              activeElement.id === element.id ? styles.active : ""
            }`}
            onClick={NavSideRedirect}
            data-link={element.link}
          >
            {element.icon}
            <a href={element.link}>{element.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
