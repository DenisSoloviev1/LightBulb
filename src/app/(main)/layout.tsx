import styles from "./page.module.scss";
import NavBar from "@/widjets/NavBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className={styles.header}>
        <NavBar />
      </header>

      <main className={styles.main}>{children}</main>
    </>
  );
}
