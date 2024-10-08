import location from "../../images/icons/location.svg";
import phone from "../../images/icons/mobile.svg";
import attention from "../../images/icons/attention.svg";
import car from "../../images/icons/car.svg";

import styles from "./BenefitSection.module.css";

const benefitList = [
  {
    title: "Наші фішки",

    subTitle: (
      <p className={styles.subtitleOurBenefits}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    ),
  },
  {
    title: "Доступ до місцязнаходження водія",
    subTitle: (
      <p className={styles.benefitCardSubTitle}>
        Слідкуй за актуальною локацією водія та завжди будь в курсі де зараз
        Твій бус або відправлена Тобою посилка. Ми не Uber, але теж круто!
      </p>
    ),
    icon: location,

    alt: "Локація",
  },
  {
    title: "Онлайн бронювання у додатку",
    subTitle: (
      <p className={styles.benefitCardSubTitle}>
        Швидке бронювання онлайн! <br /> Забудь про сотні дзвінків перед
        поїздкою!
      </p>
    ),

    icon: phone,
    alt: "Мобільний телефон",
  },
  {
    title: "Статус поїздки",
    subTitle: (
      <p className={`${styles.benefitCardSubTitle} ${styles.attention}`}>
        Додаток нагадає про поїздку та повідомить тебе, як тільки водій вирушить
        в дорогу!
      </p>
    ),
    icon: attention,
    alt: "Увага",
  },
  {
    title: "Відстеження поїздок",
    subTitle: (
      <p className={styles.benefitCardSubTitle}>
        Відправив посилку рідним? <br /> Відстежуй її у режимі онлайн
      </p>
    ),
    icon: car,
    alt: "Вантажівка",
  },
];

export default function BenefitSection() {
  return (
    <section className={styles.benefitSection}>
      <div className="container">
        <h3 className="visually-hidden">Переваги</h3>

        <div className={styles.card}>
          <div className={styles.imageCard}></div>

          <div className={styles.cardContentWrapper}>
            <h4 className={styles.titleCard}>
              <span>YDC</span> - будь в курсі!
            </h4>

            <p className={styles.subTitleCard}>
              Доступ до місцязнаходження водія
            </p>
            <p className={styles.textCard}>
              Слідкуй за актуальною локацією водія та завжди будь в курсі де
              зараз Твій бус або відправлена Тобою посилка. Ми не Uber, але теж
              круто!
            </p>

            <button type="button" className={styles.cardButton}>
              Дізнатися більше
            </button>
          </div>
        </div>

        <ul className={styles.benefitCardList}>
          {benefitList.map(({ title, subTitle, icon, alt }) => {
            if (title === "Наші фішки") {
              return (
                <li
                  key={title}
                  className={`${styles.benefitCardItem} ${styles.ourBenefits}`}
                >
                  <h3 className={styles.titleOurBenefits}>{title}</h3>
                  {subTitle}
                  <button type="button" className={styles.buttonOurBenefits}>
                    Дізнатись більше
                  </button>
                </li>
              );
            }

            return (
              <li
                key={title}
                className={`${styles.benefitCardItem} ${
                  alt === "Локація" ? styles.location : ""
                }`}
              >
                <img
                  src={icon}
                  alt={alt}
                  className={styles.benefitCardItemImage}
                />
                <div>
                  <h5 className={styles.benefitCardTitle}>{title}</h5>
                  {subTitle}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
