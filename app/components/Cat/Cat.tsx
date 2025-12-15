"use client";

import { useState } from "react";

import Image from "next/image";

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
      return <Image src="/happy.gif" alt={""} width={360} height={360} />;
  }
};
