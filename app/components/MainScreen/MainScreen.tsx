import { useAppStore } from "@/app/stores/appStore";
import { Button } from "..";
import { Cat } from "..";

import styles from "./MainScreen.module.css";

export const MainScreen = () => {
  const { win } = useAppStore();

  return (
    <div className={styles.root}>
      <Cat />
      {!win && (
        <p
          className={styles.question}
        >{`Would you like to go on a date the night before NYE? <3`}</p>
      )}
      {!win && (
        <div className={styles.buttonCluster}>
          <Button type="yes" />
          <Button type="no" />
        </div>
      )}

      {win && <p className={styles.yay}>{`Yay!`}</p>}
      {win && (
        <p className={styles.details}>{`
      I'll take you to a spot on the mountain, let's pretend it's NYE (:
      `}</p>
      )}

      {win && (
        <p className={styles.details}>{`
      Text me for more deets bc i can't fit much on here ):
      `}</p>
      )}
    </div>
  );
};
