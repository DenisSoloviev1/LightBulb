import styles from "./page.module.scss";

export default function Layot({ children }: { children: React.ReactNode }) {
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
