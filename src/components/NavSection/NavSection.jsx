import arrowDown from "../../images/icons/arrow-down.svg";
import calendar from "../../images/icons/calendar.svg";

import styles from "./NavSection.module.css";

const navList = ["Звідки?", "Куди?", "Коли?", "1 пасажир"];

export default function NavSection() {
  return (
    <section className={styles.navSection}>
      <div className="container">
        <h2 className="visually-hidden">Навігація для клієнтів</h2>

        <div className={styles.wrapperClientButtons}>
          <button
            type="button"
            className={`${styles.clintButton} ${styles.passenger}`}
          >
            Пасажир
          </button>
          <button
            type="button"
            className={`${styles.clintButton} ${styles.carrier}`}
          >
            Перевізник
          </button>
        </div>

        <div className={styles.navigation}>
          <ul className={styles.navList}>
            {navList.map((item) => {
              if (item === "Коли?") {
                return (
                  <li key={item}>
                    <button
                      className={`${styles.navItemButton} ${styles.navItemButtonDate}`}
                    >
                      <img
                        src={calendar}
                        alt="Календар"
                        width={22}
                        height={22}
                        className={styles.navItemButtonCalendar}
                      />
                      <span>{item}</span>
                      <img
                        src={arrowDown}
                        alt="Стрілка вниз"
                        width={20}
                        height={20}
                        className={styles.navItemButtonArrowDown}
                      />
                    </button>
                  </li>
                );
              }

              return (
                <li key={item}>
                  <button className={styles.navItemButton}>
                    <span>{item}</span>
                    <img
                      src={arrowDown}
                      alt="Стрілка вниз"
                      width={20}
                      height={20}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <button type="button" className={styles.goButton}>
            Поїхали
          </button>
        </div>
      </div>
    </section>
  );
}
