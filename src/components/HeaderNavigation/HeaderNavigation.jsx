import styles from "./HeaderNavigation.module.css";

const navList = ["Головна", "Бронювання", "Рейси", "Допомога"];

export default function HeaderNavigation() {
  const handleLinkClick = (e) => e.preventDefault();

  return (
    <nav>
      <ul className={styles.navigationList}>
        {navList.map((item) => {
          return (
            <li key={item}>
              <a
                href="/"
                className={styles.navigationLink}
                onClick={handleLinkClick}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
