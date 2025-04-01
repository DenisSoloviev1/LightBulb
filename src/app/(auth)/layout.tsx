import styles from "./styles.module.scss";

export default function AuthLayot({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.background}>
      {children}
      
      <ul className={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
