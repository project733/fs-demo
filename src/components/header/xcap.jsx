import { NavLink } from 'react-router-dom';

import styles from "./XCAPHeader.module.scss";

export const XCAPHeader = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/what-we-do/xyzcapital">
        <img src="https://placehold.co/250x100" alt="XYZ Capital" />
      </NavLink>
      <div className="title">XYZ Capital</div>
    </header>
  );
};