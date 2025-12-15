"use client";
import { useAppStore } from "@/app/stores/appStore";
import { useRef } from "react";

import styles from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps {
  type: "yes" | "no";
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const { type, onClick } = props;

  const { fails, incrementFails, setWin } = useAppStore();

  const ref = useRef<HTMLButtonElement>(null);

  const dodge = () => {
    if (!ref.current) return;

    const x = Math.random() * 40 - 20;
    const y = Math.random() * 30 - 15;

    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <button
      className={clsx(styles.root, {
        [styles.yes]: type == "yes",
        [styles.no]: type == "no",
      })}
      style={{ scale: type == "yes" ? 1 + fails * 0.1 : 1 - fails * 0.1 }}
      onClick={() => {
        if (onClick) onClick();

        if (type == "no") {
          incrementFails();
        } else {
          setWin(true);
        }
      }}
      onMouseEnter={() => {
        if (type == "no") dodge();
      }}
      ref={ref}
    >
      {type == "yes" ? "YES" : "NO"}
    </button>
  );
};
