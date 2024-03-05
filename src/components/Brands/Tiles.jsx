import styles from "./Tiles.module.scss";

export const BrandTiles = () => {
  return (
    <div className={styles.brands}>
      <h2>Our Solutions</h2>
      <p>
        REM Testantur Eaque explere minima ratione cum cvictiones malevolis ipsa
        est veritatis Scandala praetensionis.
      </p>
      <ul className={styles.tiles}>
        <li>
          <a
            href="/what-we-do/xyzcapital"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://placehold.co/250x250" alt="XYZ Financial Group" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="https://placehold.co/250x250" alt="XYZ Financial Group" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="https://placehold.co/250x250" alt="XYZ Financial Group" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="https://placehold.co/250x250" alt="XYZ Financial Group" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="https://placehold.co/250x250" alt="XYZ Financial Group" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="https://placehold.co/250x250" alt="XYZ Financial Group" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="https://placehold.co/250x250" alt="XYZ Financial Group" />
          </a>
        </li>
      </ul>
      <p className={styles.see_all}>
        <a href="/what-we-do">See all our solutions</a>
      </p>
    </div>
  );
};