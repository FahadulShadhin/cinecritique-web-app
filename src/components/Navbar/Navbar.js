import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.png";
import styles from "./styles";

const Navbar = (props) => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(true);
  const handleLogoutClick = () => sessionStorage.removeItem("token");

  return (
    <header className={styles.nav_header}>
      <div className={styles.nav_logo_container}>
        <div>
          <img className={styles.nav_logo} src={logo} />
        </div>
        <div>
          <button
            type="button"
            className={styles.burger_menu_btn}
            onClick={() => setShowBurgerMenu(!showBurgerMenu)}
          >
            <svg className={styles.burger_menu_svg} viewBox="0 0 24 24">
              {showBurgerMenu ? (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={
          !showBurgerMenu
            ? styles.nav_links_container
            : styles.nav_links_container_hidden
        }
      >
        <NavLink to="/" className={styles.nav_link}>
          Home
        </NavLink>
        <a href="#" className={styles.nav_link + " sm:ml-4"}>
          About
        </a>
        <a href="#" className={styles.nav_link + " sm:ml-4"}>
          Movies
        </a>

        {props.isAuthenticate ? (
          <NavLink
            to="/user/signin"
            className={styles.nav_link + " sm:ml-4"}
            onClick={handleLogoutClick}
          >
            Log out
          </NavLink>
        ) : (
          <NavLink to="/user/signin" className={styles.nav_link + " sm:ml-4"}>
            Sign in
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Navbar;
