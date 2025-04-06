import styles from "./styles.module.scss";

interface CustomButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}

export function CustomButton({
  children,
  type = "button",
  disabled = false,
  onClick,
}: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={styles.customButton}
      data-disabled={disabled}
    >
      {children}
    </button>
  );
}
