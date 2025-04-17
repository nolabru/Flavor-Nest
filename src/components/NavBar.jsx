import styles from "./NavBar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { icons } from "../data/icons";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav_bar}>
        <NavLink to="/" className={styles.logo_recipes}>
          <FontAwesomeIcon
            className={styles.icon_recipes}
            icon={icons.faUtensils}
          />
          FlavorNest
        </NavLink>

        <ul>
          <li className={styles.nav_links_items}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : styles.nav_link
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : styles.nav_link
              }
            >
              Entrar
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : styles.nav_link
              }
            >
              Cadastrar
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : styles.nav_link
              }
            >
              Sobre
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
