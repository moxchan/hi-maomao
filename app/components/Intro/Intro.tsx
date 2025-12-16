"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LetterScreen, MainScreen } from "..";

type IntroState = "letter" | "main";

export const IntroFlow = () => {
  const [state, setState] = useState<IntroState>("letter");

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {state === "letter" && (
          <LetterScreen key="letter" onContinue={() => setState("main")} />
        )}

        {state === "main" && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <MainScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
