import styles from "./BookButton.module.css";

export default function BookButton() {
  return (
    <button type="button" className={styles.button}>
      Бронюй
    </button>
  );
}
