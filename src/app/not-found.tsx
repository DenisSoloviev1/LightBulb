import Image from "next/image";
import Link from "next/link";
import { notFound } from "../../public";
import styles from "./page.module.scss";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <Image src={notFound} alt="notFound" width={300} height={300} />

      <div className={styles.text}>
        <h1>404 - Страница не найдена</h1>
        <p>
          Перейти на <Link href={"/"}>главную</Link>
        </p>
      </div>
    </div>
  );
}
