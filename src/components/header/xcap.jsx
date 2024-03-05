import styles from "./XCAPHeader.module.scss";

export const XCAPHeader = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src="https://placehold.co/250x100" alt="XYZ Capital" />
      </a>
      <div className="title">XYZ Capital</div>
    </header>
  );
};