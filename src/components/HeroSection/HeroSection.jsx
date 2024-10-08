import BookButton from "../common-components/BookButton/BookButton";

import path from "../../images/icons/path.svg";
import wave from "../../images/icons/wave.svg";

import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.contentWrapperMobile}>
          <h1 className={styles.mobileTitle}>
            YDC <span className={styles.mobileTitleInside}>Перевізники</span>{" "}
            Європи
          </h1>

          <div className={styles.buttonWrapper}>
            <BookButton />
          </div>

          <div className={styles.imageWrapper}>
            <img src={path} alt="Мапа з логотипом" />
          </div>
        </div>

        <div className={styles.contentWrapperDesktop}>
          <div className={styles.content}>
            <h1 className={styles.desktopTitle}>Перевізники Європи</h1>
            <p className={styles.desktopSubTitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <BookButton />
          </div>

          <div className={styles.circle}></div>
        </div>

        <div className={styles.waveWrapper}>
          <img src={wave} alt="Хвиля" className={styles.wave} />
          <img
            src={wave}
            alt="Хвиля під нахилом"
            className={styles.tiltedWave}
          />
        </div>
      </div>
    </section>
  );
}
