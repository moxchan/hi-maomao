import { useState } from "react";

type CatState = "happy" | "sad" | "complete";

export const Cat = () => {
  const [catState, setCatState] = useState<CatState>("happy");

  switch (catState) {
    case "complete":
      return;
    case "sad":
      return;
    case "happy":
    default:
      return;
  }
};
