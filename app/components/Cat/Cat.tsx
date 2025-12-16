"use client";

import Image from "next/image";
import { useAppStore } from "@/app/stores/appStore";
import styles from "./Cat.module.css";

export const Cat = () => {
  const { fails, win } = useAppStore();

  const catImage = () => {
    if (win) {
      return (
        <Image
          src="/standingcatflowers.png"
          alt={""}
          width={864}
          height={882}
        />
      );
    }

    if (fails > 2) {
      return <Image src="/sadwhitecat.png" alt={""} width={732} height={554} />;
    }
    return <Image src="/happy.gif" alt={""} width={360} height={360} />;
  };

  return <div className={styles.container}>{catImage()}</div>;
};
