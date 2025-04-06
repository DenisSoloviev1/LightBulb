import Link from "next/link";
import styles from "./page.module.scss";
import { CustomButton } from "@/shared/ui";
import Image from "next/image";
import { walcome } from "../../public";
import { SliderCards } from "@/shared/ui";
import { cards, howItWorks } from "@/shared/constants";
import NavBar from "@/widjets/NavBar";

export default function Page() {
  return (
    <>
      <header className={styles.header}>
        <NavBar />
      </header>

      <main className={styles.main}>
        <div className={styles.section}>
          <div className={styles.heroContainer}>
            <div className={styles.heroText}>
              <h1>
                Переплачиваете за свет? <br />
                Подберем выгодный тариф
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

        <div className={styles.section} data-style={"dark"}>
          <div className={styles.howItWorks}>
            <h2 className={styles.sectionTitle}>Как это работает</h2>
            
            <div className={styles.stepsContainer}>
              {howItWorks.map((step, index) => (
                <div key={index} className={styles.stepCard}>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}