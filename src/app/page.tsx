import Link from "next/link";
import styles from "./page.module.scss";
import NavBar from "@/widjets/NavBar";

export default function Page() {
  return (
    <>
      <header className={styles.header}>
        <NavBar/>
      </header>

      <main className={styles.main}>
        <h1>Главная страница сайта</h1>
      </main>
    </>
  );
}
