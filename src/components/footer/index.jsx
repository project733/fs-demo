import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} XYZ Financial Group Inc., all rights
        reserved.
      </p>
    </footer>
  );
};