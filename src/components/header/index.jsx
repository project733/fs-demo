import styles from "./XYZHeader.module.scss"

export const XYZHeader = () => {
  return (
    <header className={styles.header}>
      <a href="/"><img src="https://placehold.co/250x100" alt="XYZ Financial Group" /></a>
      <div className="title">XYZ Financial Group</div>
    </header>
  );
};