import React from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";
// import Header from "./header";
// import Footer from "./footer";
// import { Helmet } from "react-helmet";
import Layout from "./layout";
import { Link } from "gatsby";

// import favicon from "../imgs/favicon.ico";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./layout-why-tc.module.scss";

const ListLink = (props) => (
  <li style={{ display: `inline-block` }}>
    {props.middle ? (
      <Link className={styles.menuItemMiddle} to={props.to}>
        {props.children}
      </Link>
    ) : (
      <Link className={styles.menuItem} to={props.to}>
        {props.children}
      </Link>
    )}
  </li>
);

const LayoutWhyTC = ({ children, props }) => {
  console.log("props ===>", props);
  console.log("children ===>", children);
  return (
    <div className={styles.container}>
      <div className={styles.title}>So, why TotalCross?</div>
      <div className={styles.menuContainer}>
        <ul style={{ paddingLeft: "0" }}>
          <ListLink className={styles.menuItem} to="/low-footprint">
            Low Footprint
          </ListLink>
          <ListLink
            className={styles.menuItemBorder}
            to="/easy-to-use"
            middle={true}
          >
            Easy to use
          </ListLink>
          <ListLink className={styles.menuItem} to="/cross-platform">
            Cross-Platform
          </ListLink>
        </ul>
      </div>
      <div className={styles.childContainer}>{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWhyTC;
