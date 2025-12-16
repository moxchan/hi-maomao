import { dynaPuff } from "@/app/fonts";
import { motion } from "framer-motion";

export const LetterText = () => {
  const lines = ["", "To mao,", "I have a fun idea (:", "", "from: mox"];
  const lastIndex = lines.length - 1;
  const typingDuration = 1;
  const pauseBetweenLines = 0.1;

  let totalDelay = 0;
  const lineDelays = lines.map((line) => {
    const currentDelay = totalDelay;

    if (line.trim() !== "") {
      totalDelay += typingDuration + pauseBetweenLines;
    } else {
      totalDelay += pauseBetweenLines;
    }

    return currentDelay;
  });

  return (
    <div
      className={`space-y-4 text-3xl text-neutral-900 ${dynaPuff.className}`}
    >
      {lines.map((line, index) => {
        const hasText = line.trim() !== "";
        const currentLineDelay = lineDelays[index];

        return (
          <motion.p
            key={index}
            className={index === lastIndex ? "text-right" : "text-left"}
          >
            <motion.span
              className="inline-block whitespace-nowrap overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: hasText ? "100%" : 0 }}
              transition={{
                delay: currentLineDelay,
                duration: hasText ? typingDuration : 0,
                ease: "linear",
              }}
            >
              {line || "\u00A0"}
            </motion.span>
          </motion.p>
        );
      })}
    </div>
  );
};
