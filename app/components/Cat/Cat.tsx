"use client";

import Image from "next/image";
import { useAppStore } from "@/app/stores/appStore";

export const Cat = () => {
  const { fails, win } = useAppStore();

  if (win) {
    return (
      <Image
        preload
        src="/standingcatflowers.png"
        alt={""}
        width={864}
        height={882}
      />
    );
  }

  if (fails > 2) {
    return (
      <Image preload src="/sadwhitecat.png" alt={""} width={732} height={554} />
    );
  }

  return <Image preload src="/happy.gif" alt={""} width={360} height={360} />;
};
