import styles from "./styles.module.scss";

interface CustomButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export function CustomButton({
  children,
  disabled = false,
  onClick,
}: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={styles.customButton}
      data-disabled={disabled}
    >
      {children}
    </button>
  );
}
