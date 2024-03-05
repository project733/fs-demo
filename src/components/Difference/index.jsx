import { Masonry } from "./Masonry";

import styles from "./Difference.module.scss";

export const Difference = () => {
  return (
    <div className="container">
      <section className={styles.difference}>
        <h1>Our Social Impact</h1>
        <p>Who we support.</p>
        <Masonry />
      </section>
    </div>
  );
};
