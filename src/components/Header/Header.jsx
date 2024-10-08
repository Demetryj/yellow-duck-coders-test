import BookButton from "../common-components/BookButton/BookButton";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";

import logo from "../../images/icons/logo.svg";
import menu from "../../images/icons/menu.svg";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Логотип" width={163} height={62} />
        </div>

        <button type="button" className={styles.buttonMenu}>
          <img src={menu} alt="Меню" width={40} height={40} />
        </button>

        <HeaderNavigation />

        <div className={styles.buttonWrapper}>
          <BookButton />
        </div>
      </div>
    </header>
  );
}
