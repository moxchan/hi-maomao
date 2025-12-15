import { Button } from "..";
import { Cat } from "..";

import styles from "./MainScreen.module.css";

export const MainScreen = () => {
  return (
    <div className={styles.root}>
      <Cat />
      <p
        className={styles.question}
      >{`Would you like to go on a date the night before NYE? <3`}</p>
      <div className={styles.buttonCluster}>
        <Button type="yes" />
        <Button type="no" />
      </div>
    </div>
  );
};
