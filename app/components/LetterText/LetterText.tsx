import { dynaPuff } from "@/app/fonts";
import { motion } from "framer-motion";

const TYPING_DURATION = 3;

export const LetterText = () => {
  const lines = ["", "To mao,", "", "I have a fun idea (:", "", "from: mox"];
  const lastIndex = lines.length - 1;

  return (
    <div
      className={`space-y-4 text-3xl text-neutral-900 ${dynaPuff.className}`}
    >
      {lines.map((line, index) => (
        <motion.p
          key={index}
          className={index === lastIndex ? "text-right" : "text-left"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 1,
            duration: 0.7,
          }}
        >
          {line || "\u00A0"}
        </motion.p>
      ))}
    </div>
  );
};
