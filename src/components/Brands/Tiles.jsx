import { Link } from 'react-router-dom';

import styles from "./Tiles.module.scss";

// const basename = "/fs-demo";

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
          <Link
            to="/what-we-do/xyzcapital"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://placehold.co/250x250" alt="XYZ Financial Group" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="https://placehold.co/250x250" alt="XYZ Financial Group" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="https://placehold.co/250x250" alt="XYZ Financial Group" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="https://placehold.co/250x250" alt="XYZ Financial Group" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="https://placehold.co/250x250" alt="XYZ Financial Group" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="https://placehold.co/250x250" alt="XYZ Financial Group" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="https://placehold.co/250x250" alt="XYZ Financial Group" />
          </Link>
        </li>
      </ul>
      <p className={styles.see_all}>
        <Link to="/what-we-do">See all our solutions</Link>
      </p>
    </div>
  );
};