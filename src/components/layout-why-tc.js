import React from "react";
import PropTypes from "prop-types";
import Layout from "./layout";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./layout-why-tc.module.scss";

const LayoutWhyTC = ({ children }) => {
  console.log("children ===>", children);
  return (
    <div className={styles.container}>
      <div className={styles.title}>So, why TotalCross?</div>
      <div className={styles.childContainer}>{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWhyTC;
