"use client";

import { useState } from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    return (
      <a
        className={styles.root}
        href="https://open.spotify.com/playlist/01r4snBgEj3UlxHr4f2q5a?si=e9c94ee40954498a&pt=d1783547f6eecec0054d68bdb98287fb"
        target="_blank"
      >
        Playlist for us to fuck to
      </a>
    );
  }

  return (
    <div
      className={styles.root}
      onClick={() => setClicked(true)}
    >{`Made by the coolest guy you'll ever meet (mox)`}</div>
  );
};
