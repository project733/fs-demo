import { NavLink } from 'react-router-dom';
import styles from "./XYZHeader.module.scss"

export const XYZHeader = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img src="https://placehold.co/250x100" alt="XYZ Financial Group" />
      </NavLink>
      <div className="title">XYZ Financial Group</div>
    </header>
  );
};