import React from "react";
import styles from "./styles";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.main_container}>
        <div>
          <h6 className={styles.logo}>
            <NavLink to="/">CineCritique</NavLink>
          </h6>
        </div>
      </div>
      <div className={styles.copyright_container}>
        <span>© 2023 Copyright: </span>
        <NavLink className={styles.copyright_link} to="/">
          CineCritique
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
