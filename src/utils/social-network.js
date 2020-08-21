import React from "react";

import styles from "./social-networks.module.scss";

const SocialNetwork = (props) => (
  <div className={styles.iconContainer}>
    <a target="_blank" rel="noopener noreferrer" href={props.link}>
      {props.icon}
    </a>
  </div>
);

export default SocialNetwork;
