import styles from "./Button.module.css";

interface ButtonProps {
  type: "yes" | "no";
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const { type, onClick } = props;

  return (
    <button
      className={styles.root}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {type == "yes" ? "YES" : "NO"}
    </button>
  );
};
