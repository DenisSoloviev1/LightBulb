import Link from "next/link";
import styles from "./page.module.scss";
import { CustomButton } from "@/shared/ui";
import Image from "next/image";
import { walcome } from "../../../public";
import { SliderCards } from "@/shared/ui";
import { cards } from "@/shared/constants";

export default function Page() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1>
              Переплачиваете за свет? <br />
              Подберем тариф за 5 минут
            </h1>

            <div className={styles.heroContent}>
              <p>
                Персональный расчет экономии без сложных формул и таблиц —
                просто загрузите данные о потреблении
              </p>
              <Link href="/calculator">
                <CustomButton>Рассчитать</CustomButton>
              </Link>
            </div>
          </div>

          <Image src={walcome} alt="walcome image" width={400} height={400} />
        </div>
      </div>

      <SliderCards cards={cards} />

      <div className={styles.section} data-style={"dark"}></div>
    </>
  );
}
