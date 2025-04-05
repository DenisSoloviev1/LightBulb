import { ISliderCard } from "@/shared/types";
import styles from "./styles.module.scss";

export function SliderCards({
  cards,
}: {
  cards: ISliderCard[];
}) {
  return (
    <div className={styles.scrollingWrapper}>
      <div className={styles.scrollingContainer}>
        {[...cards, ...cards].map((card, index) => (
          <div key={index} className={styles.card}>
            <span>{card.number}</span>
            {card.text}
          </div>
        ))}
      </div>
    </div>
  );
}
