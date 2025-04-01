import styles from "./styles.module.scss";

export function Loader({ text }: { text?: string }) {
  return (
    <div className={styles.loader}>
      {text && <p className={styles.heading}>{text}</p>}
      <div className={styles.loading}>
        <div className={styles.load}></div>
        <div className={styles.load}></div>
        <div className={styles.load}></div>
        <div className={styles.load}></div>
      </div>
    </div>
  );
}
