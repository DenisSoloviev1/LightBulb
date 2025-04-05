import styles from "./page.module.scss";

export default function Layot({ children }: { children: React.ReactNode }) {
  return (
    <>
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
    </>
  );
}
