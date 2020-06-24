import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./cards.module.scss";

const Card = (props) => {
  const arrow = <FontAwesomeIcon className={styles.icon} icon={faArrowRight} />;
  const { icon, text, url, route } = props;
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>{icon}</div>
      <div className={styles.cardTitle}>{text}</div>
      {route ? (
        <Link to={route}>
          <div className={styles.cardArrow}>{arrow}</div>
        </Link>
      ) : (
        <a target="_blank" rel="noopener noreferrer" href={url}>
          <div className={styles.cardArrow}>{arrow}</div>
        </a>
      )}
    </div>
  );
};

export default Card;
