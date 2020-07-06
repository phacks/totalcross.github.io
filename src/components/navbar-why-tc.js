import React from "react";
import { Link } from "gatsby";

import styles from "./navbar-why-tc.module.scss";

const NavBarWhyTC = (props) => {
  const { active } = props;
  return (
    <div className={styles.menuContainer}>
      <ul style={{ paddingLeft: "0" }}>
        <li style={{ display: `inline-block` }}>
          <Link
            className={
              active === "Low Footprint"
                ? styles.menuItemSelected
                : styles.menuItem
            }
            to="/low-footprint"
          >
            Low Footprint
          </Link>
        </li>
        <li style={{ display: `inline-block` }}>
          <Link
            className={
              active === "Easy to use"
                ? styles.menuItemMiddleSelected
                : styles.menuItemMiddle
            }
            to="/easy-to-use"
          >
            Easy to use
          </Link>
        </li>
        <li style={{ display: `inline-block` }}>
          <Link
            className={
              active === "Cross-Platform"
                ? styles.menuItemSelected
                : styles.menuItem
            }
            to="/cross-platform"
          >
            Cross-Platform
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBarWhyTC;
