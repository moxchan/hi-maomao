import { Button } from "..";
import { Cat } from "..";

import styles from "./MainScreen.module.css";

export const MainScreen = () => {
  return (
    <div className={styles.root}>
      <Cat />
      <div className={styles.buttonCluster}>
        <Button type="yes" />
        <Button type="no" />
      </div>
    </div>
  );
};
