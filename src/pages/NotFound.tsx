import Header from "../components/Header";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <Header prevSlug="." />
      <div className={styles.content}>
        404 Error: Content not found. Return to the homepage or go back to the
        previous page.
      </div>
      <div className={styles.linkButtonContainer}>
        <div className={styles.button} role="button">
          Go Back
        </div>
        <div className={styles.button} role="button">
          Return Home
        </div>
      </div>
    </div>
  );
}
