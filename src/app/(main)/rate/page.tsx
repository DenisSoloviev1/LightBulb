import { categories } from "@/shared/constants";
import styles from "./page.module.scss";

export default function PriceCategoriesPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Тарифы под ваши нужды</h1>
        <p className={styles.subtitle}>
          Выбор наиболее оптимальной ценовой категории зависит от многих
          параметров: региона, уровня напряжения, максимальной мощности
          предприятия, но в особенности от режима работы предприятия.
        </p>

        <div className={styles.grid}>
          {categories.map((category) => (
            <div key={category.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{category.icon}</span>
                <h2 className={styles.cardTitle}>{category.title}</h2>
              </div>
              <p className={styles.cardDescription}>{category.description}</p>
              <div className={styles.bestFor}>
                <h3>Лучше всего подходит для:</h3>
                <ul>
                  {category.bestFor.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
