import { motion } from "framer-motion";
import { LetterText } from "..";

import styles from "./LetterScreen.module.css";

const TYPING_DURATION = 3;

export const LetterScreen = ({ onContinue }: { onContinue: () => void }) => {
  return (
    <motion.div
      className={styles.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className={styles.letter}
        initial={{ y: 40, scale: 0.95 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: -40, scale: 0.95 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <LetterText />

        <div className={styles.buttonRow}>
          <motion.button
            onClick={onContinue}
            className={styles.continueButton}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: TYPING_DURATION,
              duration: 0.5,
            }}
            whileTap={{ scale: 0.96 }}
          >
            Continue →
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};
